import express from 'express';
import { Request, Response, NextFunction } from 'express';
export declare const createTask: (req: Request, res: Response, next: NextFunction) => Promise<express.Response<any, Record<string, any>> | undefined>;
