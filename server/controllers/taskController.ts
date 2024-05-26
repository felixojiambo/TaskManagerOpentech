import express, { NextFunction, Request, Response } from 'express';
import { Task } from '../models/task';
import { getRepository } from 'typeorm';
import twilio from 'twilio';
import * as nodemailer from 'nodemailer';
import { Notice } from '../models/notification';
import { User } from '../models/user';
import { twilioConfig } from '../config/twilio-config';
import { nodemailerConfig } from '../config/nodemailer-config';

// Initialize router
const router = express.Router();

const client = twilio(twilioConfig.accountSid, twilioConfig.authToken);
const transporter = nodemailer.createTransport(nodemailerConfig);


interface ProtectedRequest extends Request {
  user: {
    userId: string;
    email?: string;
    isAdmin?: boolean;
  };
}
;

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = (req as any).user;
    const { title, team, stage, date, priority, assets, description, category, email, phone, trackingNumber } = req.body;

    let text = "New task has been assigned to you";
    if (team?.length > 1) {
      text += ` and ${team.length - 1} others.`;
    }
    text += ` The task priority is set to ${priority} priority, so check and act accordingly. The task date is ${new Date(date).toDateString()}. Thank you!!!`;

    const activity = {
      type: "assigned",
      activity: text,
      by: userId,
    };

    const taskRepo = getRepository(Task);
    const task = taskRepo.create({
      title,
      team,
      description,
      stage: stage.toLowerCase(),
      date,
      priority: priority.toLowerCase(),
      assets,
      activities: [activity],
      trackingNumber,
    });

    await taskRepo.save(task);

    const noticeRepo = getRepository(Notice);
    const notice = noticeRepo.create({
      team,
      text,
      task: task._id,
    });

    await noticeRepo.save(notice);

    // Assuming client.messages.create and transporter.sendMail are correctly implemented elsewhere
    const clientMessage = `Hello, your task has been assigned with tracking number ${trackingNumber}.`;
    // Replace with actual implementation
    await client.messages.create({
      body: clientMessage,
      from: twilioConfig.twilioNumber,
      to: phone,
    });

    const clientMailOptions = {
      from: '"Your Company" <no-reply@yourcompany.com>',
      to: email,
      subject: `Task Assigned - Tracking Number: ${trackingNumber}`,
      text: clientMessage,
    };
    // Replace with actual implementation
    await transporter.sendMail(clientMailOptions);

    res.status(201).json({ status: true, task: task.id, message: "Task created successfully and notifications sent to the client." });
  } catch (error:any) {
    console.error(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};


// export const createTask = async (req: ProtectedRequest, res: Response) => {
//   try {
//     const { userId } = req.user;
//     const { title, team, stage, date, priority, assets, description, category, email, phone,trackingNumber } = req.body;
//     //const trackingNumber = Task.generateTrackingNumber(title, category, phone);
//     //const trackingNumber = generateTrackingNumber(title, phone);
//     let text = "New task has been assigned to you";
//     if (team?.length > 1) {
//       text += ` and ${team.length - 1} others.`;
//     }
//     text += ` The task priority is set to ${priority} priority, so check and act accordingly. The task date is ${new Date(date).toDateString()}. Thank you!!!`;

//     const activity = {
//       type: "assigned",
//       activity: text,
//       by: userId,
//     };

//     const taskRepo = getRepository(Task);
//    const task = taskRepo.create({
//     title,
//     team,
//     description,
//     stage: stage.toLowerCase(),
//     date,
//     priority: priority.toLowerCase(),
//     assets,
//     activities: [activity], 
//     trackingNumber,
//   });

//   // Save the new task to the database
//   await taskRepo.save(task);

//     const noticeRepo = getRepository(Notice);
//     const notice = noticeRepo.create({
//       team,
//       text,
//       task: task.id,
//     });

//     await noticeRepo.save(notice);

//     // Assuming client.messages.create and transporter.sendMail are correctly implemented elsewhere
//     const clientMessage = `Hello, your task has been assigned with tracking number ${trackingNumber}.`;
//     // Replace with actual implementation
//     await client.messages.create({
//       body: clientMessage,
//       from: twilioConfig.twilioNumber,
//       to: phone,
//     });

//     const clientMailOptions = {
//       from: '"Your Company" <no-reply@yourcompany.com>',
//       to: email,
//       subject: `Task Assigned - Tracking Number: ${trackingNumber}`,
//       text: clientMessage,
//     };
//     // Replace with actual implementation
//     await transporter.sendMail(clientMailOptions);

//     res.status(201).json({ status: true, task: task.id, message: "Task created successfully and notifications sent to the client." });
//   } catch (error:any) {
//     console.error(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

// export const duplicateTask = async (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { id } = req.params;
//     const taskRepo = getRepository(Task);
//     const task = await taskRepo.findOne(id);
//     const newTask = await taskRepo.create({
//      ...task,
//       title: `${task.title} - Duplicate`,
//     });
//     newTask.team = task.team;
//     newTask.subTasks = task.subTasks;
//     newTask.assets = task.assets;
//     newTask.priority = task.priority;
//     newTask.stage = task.stage;
//     await newTask.save();

//     let text = "New task has been assigned to you";
//     if (task.team.length > 1) {
//       text += ` and ${task.team.length - 1} others.`;
//     }

//     text += ` The task priority is set to a ${task.priority} priority, so check and act accordingly. The task date is ${new Date(task.date).toDateString()}. Thank you!!!`;

//     const noticeRepo = getRepository(Notice);
//     await noticeRepo.create({
//       team: task.team,
//       text,
//       task: newTask._id, // Assuming newTask.id is the correct reference to the new task
//     });

//     // Save the notice to persist it in the database
//     await noticeRepo.save(newTask);

//     res.status(200).json({ status: true, message: "Task duplicated successfully." });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };


// export const postTaskActivity = async (req: { params: { id: any; }; user: { userId: any; }; body: { type: any; activity: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { id } = req.params;
//     const { userId } = req.user;
//     const { type, activity } = req.body;
//     const task = await Task.findById(id);
//     const data = {
//       type,
//       activity,
//       by: userId,
//     };
//     task.activities.push(data);
//     await task.save();
//     res.status(200).json({ status: true, message: "Activity posted successfully." });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };


// export const dashboardStatistics = async (req: { user: { userId: any; isAdmin: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { totalTasks?: any; last10Task?: any; users?: any; tasks?: any; graphData?: { name: string; total: unknown; }[]; status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { userId, isAdmin } = req.user;
    
//     // Retrieve all tasks
//     const taskRepository = getRepository(Task);
//     const allTasks = isAdmin
//      ? await taskRepository.find({ isTrashed: false }).populate({ path: "team", select: "name role title email" }).sort({ _id: -1 })
//       : await taskRepository.find({ isTrashed: false, team: { $in: [userId] } }).populate({ path: "team", select: "name role title email" }).sort({ _id: -1 });

//     // Retrieve users
//     const userRepository = getRepository(User);
//     const users = await userRepository.find({ isActive: true }).select("name title role isAdmin createdAt").limit(10).sort({ _id: -1 });

//     // Group tasks by stage
//     const groupTaskks = allTasks.reduce((result: { [x: string]: number; }, task: { stage: any; }) => {
//       const stage = task.stage;
//       if (!result[stage]) {
//         result[stage] = 1;
//       } else {
//         result[stage] += 1;
//       }
//       return result;
//     }, {});

//     // Group tasks by priority
//     const groupData = Object.entries(allTasks.reduce((result: { [x: string]: any; }, task: { priority: any; }) => {
//       const { priority } = task;
//       result[priority] = (result[priority] || 0) + 1;
//       return result;
//     }, {})).map(([name, total]) => ({ name, total }));

//     // Summary statistics
//     const totalTasks = allTasks?.length;
//     const last10Task = allTasks?.slice(0, 10);
//     const summary = {
//       totalTasks,
//       last10Task,
//       users: isAdmin? users : [],
//       tasks: groupTaskks,
//       graphData: groupData,
//     };

//     res.status(200).json({ status: true, message: "Successfully",...summary });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };


// export const getTasks = async (req: { query: { stage?: string; isTrashed?: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; tasks?: any; message?: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { stage, isTrashed } = req.query;
//     let query: { isTrashed?: boolean; stage?: string } = {}; // Explicitly declare the type of the query object

//     if (isTrashed!== undefined) {
//       query.isTrashed = isTrashed === "true"; // Assuming isTrashed is a string, convert to boolean
//     }

//     if (stage!== undefined) {
//       query.stage = stage; // This assumes stage is meant for an exact match
//     }

//     const taskRepository = getRepository(Task);
//     const tasks = await taskRepository.find(query).populate({ path: "team", select: "name title email" }).sort({ _id: -1 });
//     res.status(200).json({ status: true, tasks });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

// export const getTask = async (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; task?: any; message?: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findById(id).populate({ path: "team", select: "name title role email" }).populate({ path: "activities.by", select: "name" });
//     res.status(200).json({ status: true, task });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

// export const createSubTask = async (req: { body: { title: any; tag: any; date: any; }; params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { title, tag, date } = req.body;
//     const { id } = req.params;
//     const newSubTask = {
//       title,
//       date,
//       tag,
//     };
//     const task = await Task.findById(id);
//     task.subTasks.push(newSubTask);
//     await task.save();
//     res.status(200).json({ status: true, message: "SubTask added successfully." });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

// export const updateTask = async (req: { params: { id: any; }; body: { title: any; date: any; team: any; stage: any; priority: any; assets: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { id } = req.params;
//     const { title, date, team, stage, priority, assets } = req.body;
//     const task = await Task.findById(id);
//     task.title = title;
//     task.date = date;
//     task.priority = priority.toLowerCase();
//     task.assets = assets;
//     task.stage = stage.toLowerCase();
//     task.team = team;
//     await task.save();
//     res.status(200).json({ status: true, message: "Task duplicated successfully." });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

// export const trashTask = async (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     task.isTrashed = true;
//     await task.save();
//     res.status(200).json({ status: true, message: `Task trashed successfully.` });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

// export const deleteRestoreTask = async (req: { params: { id: any; }; query: { actionType: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: any; }): void; new(): any; }; }; }) => {
//   try {
//     const { id } = req.params;
//     const { actionType } = req.query;
//     if (actionType === "delete") {
//       await Task.findByIdAndDelete(id);
//     } else if (actionType === "deleteAll") {
//       await Task.deleteMany({ isTrashed: true });
//     } else if (actionType === "restore") {
//       const resp = await Task.findById(id);
//       resp.isTrashed = false;
//       resp.save();
//     } else if (actionType === "restoreAll") {
//       await Task.updateMany({ isTrashed: true }, { $set: { isTrashed: false } });
//     }
//     res.status(200).json({ status: true, message: `Operation performed successfully.` });
//   } catch (error:any) {
//     console.log(error);
//     return res.status(400).json({ status: false, message: error.message });
//   }
// };

module.exports = router;
