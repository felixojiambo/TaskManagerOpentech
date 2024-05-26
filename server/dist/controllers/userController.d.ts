import { Request, Response } from 'express';
export declare const registerUser: (req: {
    body: {
        name: any;
        email: any;
        password: any;
        isAdmin: any;
        role: any;
        title: any;
    };
}, res: Response<any, Record<string, any>>) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const logoutUser: (req: Request, res: Response) => Promise<void>;
export declare const getTeamList: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const changeUserPassword: (req: {
    user: {
        userId: any;
    };
    body: {
        password: string;
    };
}, res: {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
            (arg0: {
                status: boolean;
                message: any;
            }): void;
            new (): any;
        };
    };
}) => Promise<void>;
export declare const activateUserProfile: (req: {
    params: {
        id: any;
    };
    body: {
        isActive: boolean;
    };
}, res: {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
            (arg0: {
                status: boolean;
                message: any;
            }): void;
            new (): any;
        };
    };
}) => Promise<void>;
export declare const deleteUserProfile: (req: {
    params: {
        id: any;
    };
}, res: {
    status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
            (arg0: {
                status: boolean;
                message: any;
            }): void;
            new (): any;
        };
    };
}) => Promise<void>;
