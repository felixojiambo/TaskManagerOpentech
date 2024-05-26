"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = exports.dbConnection = void 0;
const typeorm_1 = require("typeorm");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Development environment configuration
const NODE_ENV = process.env.NODE_ENV || 'development';
const HOST = process.env.TYPEORM_HOST || 'localhost\\sqlexpress';
const PORT = parseInt(process.env.TYPEORM_PORT || '1433', 10); // Parse port as a number
const USERNAME = process.env.TYPEORM_USERNAME || '';
const PASSWORD = process.env.TYPEORM_PASSWORD || '';
const DATABASE = process.env.TYPEORM_DATABASE || 'task';
const ENTITIES_PATH = process.env.TYPEORM_ENTITIES || 'src/models/**/*.ts';
// Define TypeORM connection options
const connectionOptions = {
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
const dbConnection = async () => {
    try {
        await (0, typeorm_1.createConnection)(connectionOptions);
        console.log('DB connection established');
    }
    catch (error) {
        console.error('DB Error:', error);
        throw new Error('Failed to establish database connection');
    }
};
exports.dbConnection = dbConnection;
// Function to create JWT token
const createJWT = (res, userId) => {
    try {
        const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET || '', {
            expiresIn: '1d',
        });
        // Change sameSite from strict to none when you deploy your app
        res.cookie('token', token, {
            httpOnly: true,
            secure: NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 1 * 24 * 60 * 60 * 1000,
        });
    }
    catch (error) {
        console.error('JWT Error:', error);
        throw new Error('Failed to create JWT token');
    }
};
exports.createJWT = createJWT;
//# sourceMappingURL=index.js.map