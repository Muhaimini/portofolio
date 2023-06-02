import { randomBytes } from "crypto";

export const generateUUID = () => {
  const uuid = randomBytes(20).toString("hex");

  return uuid;
};
