import express, { Router } from "express";
import { client } from "../prisma/db.js";
import cors from "cors";
export const app = Router();
app.use(express.json());
app.use(cors());
app.get("/", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 10;
    const count = await client.announcments.count();
    const data = await client.announcments.findMany({
        where:{
          type:"exam"
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

app.get("/filters", async (req, res) => {
    let { filter } = req.query;
    filter=filter.split("-")[1];
    console.log(filter)
    if(filter)
    {
        const data =  await client.announcments.findMany({
            take:8,
            where:{
                type:"exam",
                title:{
                    contains:filter ,
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
        console.log(data)
        res.json({
            data: data,
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

