import express, { Application, Request, Response, Router } from "express";
//imports needed later for the encryption
//import jsonwebtoken from "jsonwebtoken";
//import { hash, compare } from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
(global as any).XMLHttpRequest = require('xhr2');
dotenv.config();
const User = require("./firebaseconfig");
const app: Application = express();
const port: number = 7001; //Port for the backend

app.use(express.json());
app.use(cookieParser());

app.use(cors());
app.use(function (_req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", "*");
    next();
});

//Example of route to test

// const User = require("./firebaseconfig");
app.get("/api", async (_: Request, res: Response) => {
    const snapshot = await User.get();
    const list = snapshot.docs.map((doc: any) => ({
        id: doc.id,
        ...doc.data(),
    }));
    res.send(list);
});

//Requiring routes for different request types

// These are to be added when we add the module exports for them in due time
//const awardRouter = require("./routes/awardRoutes");
//app.use("/award", awardRouter);

// const chat = require("./routes/chat_routes");
// app.use("/chat", chat);

// const experience = require("./routes/experience_routes");
// app.use("/experience", experience);

// const follows = require("./routes/follows_routes");
// app.use("/follows", follows);

// const post = require("./routes/post_routes");
// app.use("/post", post);

// const skill = require("./routes/user_routes");
// app.use("/skill", skill);

//Adding jobposting routes
const jobposting = require("./routes/jobPostingRoutes");
app.use("/jobposting", jobposting);
// Adding user routes
const user = require("./routes/userRoutes");
app.use("/user", user);

//Heartbeat Route
app.get("/", (_: Request, res: Response) => {
    res.send("Hi!");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

module.exports = Router;
