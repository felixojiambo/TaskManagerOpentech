import express, { Router } from 'express';
import userRoutes from './userRoutes';
import taskRoutes from './taskRoutes';

const appRouter: Router = express.Router();

appRouter.use('/user', userRoutes);
appRouter.use('/task', taskRoutes);

export default appRouter;
