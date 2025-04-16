import express, {Router} from "express";
import { client } from "../prisma/db.js";
import cors from "cors";
export const app = Router();
app.use(express.json())
app.use(cors())
app.get("/", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 10;
    const count = await client.announcments.count();
    const data = await client.announcments.findMany({
        take:limit,
        skip:(page-1)*limit,
        orderBy:{
            date:"desc"
        }
    });    
    if (page !== 1) {
        res.json({
            msg: data,
        });
    }
    else
    {
        res.json({
            msg:data,
            count
        })
    }
});

app.post("/filters",async (req,res)=>{
    const result=[];
    const {filters}=req.body;
    if(filters.length===0){

    }
    for (let word of filters){
        let data;
        if(word===("NEET")){
            data=await client.announcments.findMany({
                where:{
                    AND:[
                        {title:{
                                contains:word,
                                mode:"insensitive"
                            }},
                        {source:{
                                contains:word,
                                mode:"insensitive"
                            }},],
                }
            }
            )
            result.push(...data);
        }
        else {
            data=await client.announcments.findMany({
                where:{
                    OR:[
                        {title:{
                                contains:word,
                                mode:"insensitive"
                            }},
                        {source:{
                                contains:word,
                                mode:"insensitive"
                            }},],
                }
            })
            result.push(...data);
        }
    }
    res.json({
        data:result
    })
})

