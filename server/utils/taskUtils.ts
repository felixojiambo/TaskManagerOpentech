// taskUtils.ts
export const generateTrackingNumber = (title: string, phone: string): string => {
    const titleLetters = title.slice(0, 2).toUpperCase();
    const phoneNumberLastTwoDigits = phone.slice(-2);
    const trackingNumber = `OP${titleLetters}${phoneNumberLastTwoDigits}`;
    return trackingNumber;
  };
  