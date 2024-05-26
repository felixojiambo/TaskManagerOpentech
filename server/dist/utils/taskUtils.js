"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTrackingNumber = void 0;
// taskUtils.ts
const generateTrackingNumber = (title, phone) => {
    const titleLetters = title.slice(0, 2).toUpperCase();
    const phoneNumberLastTwoDigits = phone.slice(-2);
    const trackingNumber = `OP${titleLetters}${phoneNumberLastTwoDigits}`;
    return trackingNumber;
};
exports.generateTrackingNumber = generateTrackingNumber;
//# sourceMappingURL=taskUtils.js.map