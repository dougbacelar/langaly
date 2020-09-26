import { config } from 'dotenv';

const ACTIVE_ENV =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

const REQUIRED_ENV = ['ACCESS_TOKEN_SECRET'] as const;
const validateEnv = () => {
  REQUIRED_ENV.forEach((name) => {
    if (!process.env[name]) {
      throw new Error(`Could not load ${name}`);
    }
  });
};

const setupEnvironmentVariables = () => {
  console.log(`Using environment config: '${ACTIVE_ENV}'`);

  const result = config({ path: `./env/.env.${ACTIVE_ENV}` });
  if (result.error) {
    throw result.error;
  }
  validateEnv();
};

export interface IProcessEnv {
  ACCESS_TOKEN_SECRET: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}

setupEnvironmentVariables();
