const { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BeforeInsert } = require('typeorm');
const bcrypt = require('bcrypt');

@Entity()
class User {
  constructor() {
    this.name = '';
    this.title = '';
    this.role = '';
    this.email = '';
    this.password = '';
    this.isAdmin = false;
    this.isActive = true;
    this.tasks = [];
  }

  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title;

  @Column({ type: 'varchar', length: 255, nullable: false })
  role;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password;

  @Column({ type: 'boolean', default: false })
  isAdmin;

  @ManyToMany(() => Task, task => task.users)
  @JoinTable()
  tasks = [];

  @Column({ type: 'boolean', default: true })
  isActive;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  }
}

@Entity()
class Task {
  constructor() {
    this.title = '';
    this.users = [];
  }

  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title;

  @ManyToMany(() => User, user => user.tasks)
  users = [];
}

module.exports = { User, Task };
