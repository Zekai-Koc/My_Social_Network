import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import rateLimit from "express-rate-limit";
import authRouter from "./routes/authRoute.js";
import postRouter from "./routes/postRoute.js";
import morgan from "morgan";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, {
   cors: {
      origin: "http://localhost/3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-type"],
   },
});

app.use(morgan("dev"));

// DB CONNECTION
const DB = process.env.MONGODB_DATABASE.replace(
   "<PASSWORD>",
   process.env.MONGODB_USER_PASS
);

mongoose
   .connect(DB)
   .then(() => {
      console.log("DB connection successful.");
   })
   .catch((err) => console.log(`DB Conncetion Error: ${err}`));

/*    --------------   MIDDLEWARES ------------------------ */
// Limit requests from same IP.
const limiter = rateLimit({
   max: 100,
   windowMS: 60 * 60 * 1000,
   message: "Too many requests from this IP! Please try it again in one hour.",
});
app.use("/api", limiter);
// Body parser: Reading data from body into req.body.
app.use(express.json({ limit: "5mb" }));

// cors middleware
app.use(cors());

// ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);

io.on("connect", (socket) => {
   console.log("hhhhh ", socket);
});

// START SERVER
const port = process.env.PORT || 8000;
serverHttp.listen(port, () => console.log(`Server listening on port: ${port}`));

/* ---------------------------------------------------- */
/* ---------------- PREVIOUS CODE --------------------- */
/* ---------------------------------------------------- */

// import { readdirSync } from "fs";
// readdirSync("./routes").map((route) =>
//    app.use("/api/v1", require(`./routes/${route}`))
// );
