"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import express types
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorMiddlewaves_1 = require("./middlewares/errorMiddlewaves"); // Corrected import path
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
// Establish database connection (you can uncomment this when you have the dbConnection function)
// dbConnection();
const PORT = parseInt(process.env.PORT || '5000'); // Parse port as a number
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((req, res, next) => (0, morgan_1.default)("dev")(req, res, next));
app.use("/api", index_1.default);
app.use(errorMiddlewaves_1.routeNotFound);
app.use(errorMiddlewaves_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map