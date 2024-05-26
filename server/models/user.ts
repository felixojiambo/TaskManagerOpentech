import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
//import bcrypt from "bcryptjs";
import { Task } from './task';
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  static email: any;
  static isAdmin: any;
  static findOne(arg0: { email: any; }) {
    throw new Error('Method not implemented.');
  }
  validatePassword(password: any) {
    throw new Error('Method not implemented.');
  }
  static findById(userId: string) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  title!: string;

  @Column()
  role!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: false })
  isAdmin!: boolean;

  @ManyToMany(() => Task)
  @JoinTable()
  tasks!: Task[];

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // async hashPassword(): Promise<void> {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
  async hashPassword(): Promise<void> {
    if (!this.password) {
      this.password = ''; 
    }
    this.password = await bcrypt.hash(this.password, 10);
  }
  
  async comparePassword(enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
  }
  async matchPassword(enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
  }
}
