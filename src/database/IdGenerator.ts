import { randomBytes } from "crypto";

export function generateRandomId() {
  const randomId = randomBytes(16).toString("hex");
  return randomId;
}
