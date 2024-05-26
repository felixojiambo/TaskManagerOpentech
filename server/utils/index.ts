import { createConnection, ConnectionOptions } from 'typeorm';
import jwt from 'jsonwebtoken';
import { Response } from 'express'; // Assuming you're using Express for the response object
import 'blob-polyfill';

// Development environment configuration
const NODE_ENV: string = process.env.NODE_ENV || 'development';
const HOST: string = process.env.TYPEORM_HOST || 'localhost\\sqlexpress';
const PORT: number = parseInt(process.env.TYPEORM_PORT || '1433', 10); // Parse port as a number
const USERNAME: string = process.env.TYPEORM_USERNAME || '';
const PASSWORD: string = process.env.TYPEORM_PASSWORD || '';
const DATABASE: string = process.env.TYPEORM_DATABASE || 'task';
const ENTITIES_PATH: string = process.env.TYPEORM_ENTITIES || 'src/models/**/*.ts';

// Define TypeORM connection options
const connectionOptions: ConnectionOptions = {
  type: 'mssql',
  host: HOST,
  port: PORT,
  username: USERNAME,
  password: PASSWORD,
  database: DATABASE,
  entities: [ENTITIES_PATH],
  synchronize: true,
  logging: false,
};

// Function to establish database connection
export const dbConnection = async (): Promise<void> => {
  try {
    await createConnection(connectionOptions);
    console.log('DB connection established');
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Failed to establish database connection');
  }
};

// Function to create JWT token
export const createJWT = (res: Response, userId: string | number): void => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET || '', {
      expiresIn: '1d',
    });

    // Change sameSite from strict to none when you deploy your app
    res.cookie('token', token, {
      httpOnly: true,
      secure: NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    console.error('JWT Error:', error);
    throw new Error('Failed to create JWT token');
  }
};
