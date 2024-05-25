import { createConnection } from 'typeorm';
import jwt from 'jsonwebtoken';

// Development environment configuration
const NODE_ENV = process.env.NODE_ENV || 'development';
const HOST = process.env.TYPEORM_HOST || 'localhost\\sqlexpress';
const PORT = process.env.TYPEORM_PORT || 1433;
const USERNAME = process.env.TYPEORM_USERNAME || '';
const PASSWORD = process.env.TYPEORM_PASSWORD || '';
const DATABASE = process.env.TYPEORM_DATABASE || 'task';
const ENTITIES_PATH = process.env.TYPEORM_ENTITIES || 'src/models/**/*.ts';

export const dbConnection = async () => {
  try {
    await createConnection({
      type: "mssql",
      host: HOST,
      port: PORT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASE,
      entities: [ENTITIES_PATH],
      synchronize: true,
      logging: false,
    });

    console.log("DB connection established");
  } catch (error) {
    console.log("DB Error: ", error);
  }
};

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

 
  // Change sameSite from strict to none when you deploy your app
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", 
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
};




// import { createConnection } from 'typeorm';
// import jwt from 'jsonwebtoken';

// const HOST = process.env.ENDPOINT || 'opentech.cz2cmgceyhjr.eu-north-1.rds.amazonaws.com';
// const PORT = process.env.PORT || 1433;
// const USERNAME = process.env.MASTER_USERNAME || 'admin';
// const PASSWORD = process.env.PASSWORD || '5418@feliX';
// const DATABASE = process.env.DATABASE || 'opentech';

// export const dbConnection = async () => {
//   try {
//     await createConnection({
//       type: "mssql",
//       host: HOST,
//       port: PORT,
//       username: USERNAME,
//       password: PASSWORD,
//       database: DATABASE,
//       entities: [
//         __dirname + '/**/*.models{.ts,.js}',
//       ],
//       synchronize: true,
//     });

//     console.log("DB connection established");
//   } catch (error) {
//     console.log("DB Error: ", error);
//   }
// };

// export const createJWT = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "1d",
//   });


//   res.cookie("token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "none", 
//     maxAge: 1 * 24 * 60 * 60 * 1000, 
//   });
// };
