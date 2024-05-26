"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const taskRoutes_1 = __importDefault(require("./taskRoutes"));
const appRouter = express_1.default.Router();
appRouter.use('/user', userRoutes_1.default);
appRouter.use('/task', taskRoutes_1.default);
exports.default = appRouter;
//# sourceMappingURL=index.js.map