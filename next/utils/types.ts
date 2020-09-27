interface IProcessEnv {
  ACCESS_TOKEN_SECRET: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}
export {};
