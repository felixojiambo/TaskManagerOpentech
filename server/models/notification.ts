import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from './user'; // Adjust the path as necessary
import { Task } from './task'; // Adjust the path as necessary

// Define the notification type enum outside the class
enum NotiType {
  ALERT = 'alert',
  MESSAGE = 'message'
}

@Entity()
export class Notice {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User)
  @JoinTable()
  team: User[];

  @Column()
  text: string;

  @ManyToOne(() => Task)
  task: Task;

  @Column({ default: NotiType.ALERT, enum: NotiType }) // Use the external enum here
  notiType: NotiType; // Specify the correct data type

  @ManyToMany(() => User)
  @JoinTable()
  isRead: User[];

  @CreateDateColumn()
  createdAt: Date;
}
