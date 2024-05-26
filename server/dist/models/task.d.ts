import { User } from './user';
export declare class Task {
    static generateTrackingNumber(title: any, category: any, phone: any): void;
    save(): void;
    static findById(id: any): void;
    static findByIdAndDelete(id: any): void;
    static deleteMany(arg0: {
        isTrashed: boolean;
    }): void;
    static updateMany(arg0: {
        isTrashed: boolean;
    }, arg1: {
        $set: {
            isTrashed: boolean;
        };
    }): void;
    id: number | null;
    title: string;
    date: Date;
    priority: string;
    stage: string;
    activities: Activity[];
    subTasks: SubTask[];
    team: User[];
    isTrashed: boolean;
    description: string;
    email: string;
    phone: string;
    trackingNumber: string;
    assets: any;
    _id: any;
    constructor();
    static findAndCountAll(params: any): void;
    generateTrackingNumber(): string;
}
export declare class Activity {
    id: number;
    type: string;
    activity: string;
    date: Date;
    task: Task;
    by: string;
}
export declare class SubTask {
    id: number;
    title: string;
    date: Date;
    tag: string;
    task: Task;
}
