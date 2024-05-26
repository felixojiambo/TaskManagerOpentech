import { createConnection } from 'typeorm';

async function dbConnection() {
  try {
    const connection = await createConnection({
      type: 'mssql',
      host: process.env.TYPEORM_HOST?? 'localhost',
      port: parseInt(process.env.TYPEORM_PORT?? '1433', 10),
      username: process.env.TYPEORM_USERNAME?? '',
      password: process.env.TYPEORM_PASSWORD?? '',
      database: process.env.TYPEORM_DATABASE?? '',
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      logging: process.env.TYPEORM_LOGGING === 'true',
      entities: ['./models/*.js'],
    });

    console.log('Database connection established successfully');
    return connection;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

export default dbConnection;
