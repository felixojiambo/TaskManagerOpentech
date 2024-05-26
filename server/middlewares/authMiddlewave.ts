import jwt from "jsonwebtoken";
import { getRepository } from 'typeorm';
import { User } from "../models/user"; // Ensure this is correctly imported
import { Request, Response } from 'express';
interface DecodedToken {
  userId: string;
  
}

const protectRoute = async (req: { cookies: { token: any; }; user: { email: any; isAdmin: any; userId: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: string; }): any; new(): any; }; }; }, next: () => void) => {
  try {
    let token = req.cookies?.token;

    if (token) {
      const secret = process.env.JWT_SECRET!;
      const decodedToken = jwt.verify(token, secret) as DecodedToken;

      const userRepository = getRepository(User);
      const user = await userRepository.findOne({
        where: { id: parseInt(decodedToken.userId, 10) }, 
        select: ["email", "isAdmin"]
      });
      if (user) {
        req.user = {
          email: user.email,
          isAdmin: user.isAdmin,
          userId: decodedToken.userId,
        };
        next();
      } else {
        return res.status(404).json({ status: false, message: "User not found" });
      }
    } else {
      return res.status(401).json({ status: false, message: "Not authorized. Try login again." });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({ status: false, message: "Not authorized. Try login again." });
  }
};


interface ProtectedRequest extends Request {
  user: {
    userId: string;
    email?: string;
    isAdmin?: boolean;
  };
}

export const someProtectedRouteHandler = async (req: ProtectedRequest, res: Response) => {
  const { userId } = req.user;
  res.json({ userId });
};

// isAdminRoute remains unchanged

const isAdminRoute = (req: { user: { isAdmin: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: boolean; message: string; }): any; new(): any; }; }; }, next: () => void) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try login as admin.",
    });
  }
};

export { isAdminRoute, protectRoute };