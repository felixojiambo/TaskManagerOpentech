import express, { Request, Response, NextFunction } from 'express'; // Import express types
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { errorHandler, routeNotFound } from './middlewares/errorMiddlewaves'; // Corrected import path
import routes from './routes/index';
dotenv.config();

// Establish database connection (you can uncomment this when you have the dbConnection function)
// dbConnection();

const PORT: number = parseInt(process.env.PORT || '5000'); // Parse port as a number

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser() as express.RequestHandler);

app.use((req, res, next) => morgan("dev")(req, res, next));


app.use("/api", routes);

app.use(routeNotFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
