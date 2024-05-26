import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity()
export class Task {
  static generateTrackingNumber(title: any, category: any, phone: any) {
    throw new Error('Method not implemented.');
  }
  save() {
    throw new Error('Method not implemented.');
  }
  static findById(id: any) {
    throw new Error('Method not implemented.');
  }
  static findByIdAndDelete(id: any) {
    throw new Error('Method not implemented.');
  }
  static deleteMany(arg0: { isTrashed: boolean; }) {
    throw new Error('Method not implemented.');
  }
  static updateMany(arg0: { isTrashed: boolean; }, arg1: { $set: { isTrashed: boolean; }; }) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number | null;

  @Column()
  title: string;

  @CreateDateColumn()
  date: Date;

  @Column({ default: 'normal' })
  priority: string;

  @Column({ default: 'todo' })
  stage: string;

  @OneToMany(() => Activity, activity => activity.task)
  activities: Activity[];

  @OneToMany(() => SubTask, subTask => subTask.task)
  subTasks: SubTask[];

  @ManyToMany(() => User, user => user.tasks)
  team: User[];

  @Column({ default: false })
  isTrashed: boolean;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  trackingNumber: string;
  assets: any;
  _id: any;

  constructor() {
    this.id = null;
    this.title = '';
    this.date = new Date();
    this.priority = 'normal';
    this.stage = 'todo';
    this.activities = [];
    this.subTasks = [];
    this.team = [];
    this.isTrashed = false;
    this.description = '';
    this.email = '';
    this.phone = '';
    this.trackingNumber = '';//this.generateTrackingNumber();
  }

  static findAndCountAll(params: any): void {
    throw new Error("Method 'findAndCountAll' must be implemented.");
  }

  generateTrackingNumber(): string {
    const titleLetters = this.title.slice(0, 2).toUpperCase();
    const phoneNumberLastTwoDigits = this.phone.slice(-2);
    const trackingNumber = `OP${titleLetters}${phoneNumberLastTwoDigits}`;
    return trackingNumber;
  }
}

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: 'assigned' })
  type!: string;

  @Column()
  activity!: string;

  @CreateDateColumn()
  date!: Date;

  @ManyToOne(() => Task, task => task.activities)
  task!: Task;

  @Column()
  by!: string;
}

@Entity()
export class SubTask {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @CreateDateColumn()
  date!: Date;

  @Column()
  tag!: string;

  @ManyToOne(() => Task, task => task.subTasks)
  task!: Task;
}
