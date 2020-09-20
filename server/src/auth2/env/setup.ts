import { config } from 'dotenv';

const ACTIVE_ENV =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

export const setupEnvironmentVariables = () => {
  // eslint-disable-next-line no-console
  console.log(`Using environment config: '${ACTIVE_ENV}'`);

  const result = config({ path: `./env/.env.${ACTIVE_ENV}` });
  if (result.error) {
    throw result.error;
  }

  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('Could not load access token secret');
  }
};
