"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodemailerConfig = void 0;
exports.nodemailerConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
};
//# sourceMappingURL=nodemailer-config.js.map