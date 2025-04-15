import express from "express";
import {app} from "./server/index.js";
import {botRouter} from "./chatbot/index.js";
const server=express();
server.use(express.json());
server.use("/announcements",app)
server.use("/api",botRouter);
server.listen(3000);
