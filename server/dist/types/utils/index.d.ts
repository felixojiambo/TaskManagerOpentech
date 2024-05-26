import { Response } from 'express';
export declare const dbConnection: () => Promise<void>;
export declare const createJWT: (res: Response, userId: string | number) => void;
