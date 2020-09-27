interface IProcessEnv {
  ACCESS_TOKEN_SECRET: string;
}

declare function fetch(input: RequestInfo, init?: RequestInit): Promise<string>;
declare global {
  namespace NodeJS {
    interface ProcessEnv extends IProcessEnv {}
  }
}

export type LangalyProfile = {
  id: number;
  countryCode: string;
  displayName: string;
  description: string;
  birthdate: Date;
};
