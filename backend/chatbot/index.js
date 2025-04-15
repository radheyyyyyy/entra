import {Router} from 'express';
import zod from 'zod'
import {client} from "../prisma/db.js";
export const botRouter = Router();
const nameSchema=zod.string().min(2).max(500)
const conversation=[];
botRouter.post("/message",async (req,res)=>{
    const {sessionId, message} = req.body;
    if(nameSchema.safeParse(message).success) {
        if (sessionId) { // add ! after session is created
            res.status(400).json({msg: "session_not_found"})
        }
        if (!conversation[sessionId]) {
            conversation[sessionId] = {
                state: "askName",
                message: null
            }
        }
        const current = conversation[sessionId];
        let reply = '';
        if (current.state === "askName") {
            current.message = message
            current.state = "askServie"
            reply = {
                reply:`Hi ${current.message},How can I help you today?`,
            }
        }
        else if(current.state==="askService"){
            current.message = message
                    if(message==="announcements") {
                        console.log("announcements found")
                        const res = await client.announcments.findMany({
                            orderBy: {
                                id: 'desc',
                            },
                            take: 3,
                            select:{
                                link:true,
                                source:true,
                                title:true
                            }
                        })
                        console.log(res)
                        reply = {data: res}
                    }
        }
        else {
            reply = "I\'m sorry, I didn\'t understand that."
        }

        res.status(200).json({
            reply: reply
        })

    }
    else {
        res.json({
            reply:"Invalid request.Please check your inputs"
        })
    }
})