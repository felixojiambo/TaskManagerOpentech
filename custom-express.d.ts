// custom-types.d.ts
declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      userId: string;
      email: string;
      isAdmin: boolean;
      // Add other user properties as needed
    };
  }
}
