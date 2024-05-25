const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } = require('typeorm');
const User = require('./User'); // Assuming you have a User module defined elsewhere

Entity();
class Task {
  constructor() {
    this.id = null;
    this.title = '';
    this.date = new Date();
    this.priority = 'normal';
    this.stage = 'todo';
    this.activities = [];
    this.subTasks = [];
    this.assets = [];
    this.team = [];
    this.isTrashed = false;
    this.description = '';
    this.email = '';
    this.phone = '';
  }

  static findAndCountAll(params) {
    throw new Error("Method 'findAndCountAll' must be implemented.");
  }
}

Entity();
class Activity {
  constructor() {
    this.id = null;
    this.type = 'assigned';
    this.activity = '';
    this.date = new Date();
    this.task = null;
    this.by = '';
  }
}

Entity();
class SubTask {
  constructor() {
    this.id = null;
    this.title = '';
    this.date = new Date();
    this.tag = '';
    this.task = null;
  }
}

module.exports = { Task, Activity, SubTask };
