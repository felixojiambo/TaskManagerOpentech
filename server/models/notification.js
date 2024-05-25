const { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToManyToMany, JoinTable, CreateDateColumn } = require('typeorm');

@Entity()
class Notice {
  constructor() {
    this.text = '';
    this.notiType = 'alert';
    this.isRead = [];
    this.team = [];
    this.task = null;
  }

  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'text' })
  text;

  @Column({ type: 'varchar', length: 255, default: 'alert' })
  notiType;

  @Column({ type: 'boolean', default: false })
  isRead;

  @ManyToMany(() => User, user => user.notifications)
  @JoinTable()
  team = [];

  @ManyToOne(() => Task, task => task.notifications)
  task;

  @CreateDateColumn()
  createdAt;
}

@Entity()
class User {
  constructor() {
    this.notifications = [];
  }

  @PrimaryGeneratedColumn()
  id;

  @ManyToManyToMany(() => Notice, notice => notice.team)
  notifications = [];
}

@Entity()
class Task {
  constructor() {
    this.notifications = [];
  }

  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title;

  @ManyToManyToMany(() => Notice, notice => notice.task)
  notifications = [];
}

module.exports = { Notice, User, Task };
