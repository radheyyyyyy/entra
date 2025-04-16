import express from "express";
import {app} from "./Routes/exam-announcement.js";
import {botRouter} from "./chatbot/index.js";
import {admissionRouter} from "./Routes/admission-announcement.js";
const server=express();
server.use(express.json());
server.use("/announcements",app)
server.use("/admission",admissionRouter)
server.use("/api",botRouter);
server.listen(3000);
