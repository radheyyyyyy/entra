import express, { Router } from "express";
import { client } from "../prisma/db.js";
import cors from "cors";
export const admissionRouter = Router();
admissionRouter.use(express.json());
admissionRouter.use(cors());
admissionRouter.get("/", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 10;
    const count = await client.announcments.count();
    const data = await client.announcments.findMany({
        where:{
            type:"admission"
        },
        take: limit,
        skip: ((page - 1) * limit) | 0,
        orderBy: {
            date: "desc",
        },
    });
    if (page !== 1) {
        res.json({
            msg: data,
        });
    } else {
        res.json({
            msg: data,
            count,
        });
    }
});

admissionRouter.post("/filters", async (req, res) => {
    let { filter } = req.body;
    console.log(filter);
    let result=[];
    if(filter)
    {
        for(let word of filter){
            console.log(word)
        const data =  await client.announcments.findMany({
            take:8,
            where:{
                location:{
                    contains:word,
                    mode:"insensitive"
                }
            },
            orderBy: {
                date: "desc",
            },select:{
                title:true,
                link:true,
                source:true,
                date:true
            }
        })
        result.push(data)
    }

        res.json({
            data: result,
        });
    } else {
        res.json({
            msg: "Something went wrong",
        });
    }
    // if (filters.length === 0) {
    // }
    // for (let word of filters) {
    //     const data = await client.announcments.findMany({
    //         where: {
    //             title: {
    //                 contains: word,
    //                 mode: "insensitive",
    //             },
    //         },
    //     });
    //     result.push(...data);
    // }
});
