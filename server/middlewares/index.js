import { expressjwt } from "express-jwt";
import dotenv from "dotenv";
dotenv.config();

console.log("process.env.JWT_SECRET ", process.env.JWT_SECRET);

export const requireSignin = expressjwt({
   secret: process.env.JWT_SECRET,
   algorithms: ["HS256"],
});
