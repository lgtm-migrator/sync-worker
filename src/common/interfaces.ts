type HexBase64Latin1Encoding = 'latin1' | 'hex' | 'base64';

export interface IConfig {
  get: <T>(setting: string) => T;
  has: (setting: string) => boolean;
}

export interface OpenApiConfig {
  filePath: string;
  basePath: string;
  jsonPath: string;
  uiPath: string;
}

export interface IQueueConfig {
  jobManagerBaseUrl: string;
  heartbeatManagerBaseUrl: string;
  dequeueIntervalMs: number;
  heartbeatIntervalMs: number;
  jobType: string;
  taskType: string;
}

export interface ICryptoConfig {
  readFileEncoding: BufferEncoding;
  pem: string;
  algoritm: string;
  signEncoding: HexBase64Latin1Encoding;
}

export interface IDBConfig {
  host: string;
  user: string;
  database: string;
  password: string;
  port: number;
  sslEnabled: boolean;
  rejectUnauthorized: boolean;
  sslPaths: {
    ca: string;
    key: string;
    cert: string;
  };
}
