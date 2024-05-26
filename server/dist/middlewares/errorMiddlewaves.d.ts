import { Request, Response, NextFunction } from 'express';
declare const routeNotFound: (req: Request, res: Response, next: NextFunction) => void;
declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
export { routeNotFound, errorHandler };
