import { Task } from './task';
export declare class User {
    static email: any;
    static isAdmin: any;
    static findOne(arg0: {
        email: any;
    }): void;
    validatePassword(password: any): void;
    static findById(userId: string): void;
    id: number;
    name: string;
    title: string;
    role: string;
    email: string;
    password: string;
    isAdmin: boolean;
    tasks: Task[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    hashPassword(): Promise<void>;
    comparePassword(enteredPassword: string): Promise<boolean>;
    matchPassword(enteredPassword: string): Promise<boolean>;
}
