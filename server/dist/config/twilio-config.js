"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twilioConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.twilioConfig = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    twilioNumber: process.env.TWILIO_NUMBER,
};
//# sourceMappingURL=twilio-config.js.map