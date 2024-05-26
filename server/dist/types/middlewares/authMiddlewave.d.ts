/// <reference types="cookie-parser" />
import { Request, Response } from 'express';
declare const protectRoute: (req: {
    cookies: {
        token: any;
    };
    user: {
        email: any;
        isAdmin: any;
        userId: any;
    };
}, res: {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
            (arg0: {
                status: boolean;
                message: string;
            }): any;
            new (): any;
        };
    };
}, next: () => void) => Promise<any>;
interface ProtectedRequest extends Request {
    user: {
        userId: string;
        email?: string;
        isAdmin?: boolean;
    };
}
export declare const someProtectedRouteHandler: (req: ProtectedRequest, res: Response) => Promise<void>;
declare const isAdminRoute: (req: {
    user: {
        isAdmin: any;
    };
}, res: {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
            (arg0: {
                status: boolean;
                message: string;
            }): any;
            new (): any;
        };
    };
}, next: () => void) => any;
export { isAdminRoute, protectRoute };
