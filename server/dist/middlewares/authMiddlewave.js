"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectRoute = exports.isAdminRoute = exports.someProtectedRouteHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const user_1 = require("../models/user"); // Ensure this is correctly imported
const protectRoute = async (req, res, next) => {
    try {
        let token = req.cookies?.token;
        if (token) {
            const secret = process.env.JWT_SECRET;
            const decodedToken = jsonwebtoken_1.default.verify(token, secret);
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
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
            }
            else {
                return res.status(404).json({ status: false, message: "User not found" });
            }
        }
        else {
            return res.status(401).json({ status: false, message: "Not authorized. Try login again." });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(401).json({ status: false, message: "Not authorized. Try login again." });
    }
};
exports.protectRoute = protectRoute;
const someProtectedRouteHandler = async (req, res) => {
    const { userId } = req.user;
    res.json({ userId });
};
exports.someProtectedRouteHandler = someProtectedRouteHandler;
// isAdminRoute remains unchanged
const isAdminRoute = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    }
    else {
        return res.status(401).json({
            status: false,
            message: "Not authorized as admin. Try login as admin.",
        });
    }
};
exports.isAdminRoute = isAdminRoute;
//# sourceMappingURL=authMiddlewave.js.map