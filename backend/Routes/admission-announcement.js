import express, { Router } from "express";
import { client } from "../prisma/db.js";
import cors from "cors";
export const admissionRouter = Router();
admissionRouter.use(express.json());
admissionRouter.use(cors());
admissionRouter.get("/", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 10;
    const count = await client.announcments.count({
        where: {
            type: "admission",
        },
    });
    const data = await client.announcments.findMany({
        where: {
            type: "admission",
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

admissionRouter.get("/filters", async (req, res) => {
    let { filters } = req.query;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 10;
    console.log(filters);
    const {location} = filters;
    console.log(location);
    
    let result = [];
    if (location) {
        const data = await client.announcments.findMany({
            take: limit,
            skip: (page - 1) * limit,
            where: {
                type: "admission",
                location: {
                    contains: location,
                    mode: "insensitive",
                },
            },
            orderBy: {
                date: "desc",
            },
            select: {
                title: true,
                link: true,
                source: true,
                date: true,
            },
        });
        result.push(...data);

        if (page == 1) {
            let count = 0;
            count = await client.announcments.count({
                where: {
                    type: "admission",
                    location: {
                        contains:location,
                        mode: "insensitive",
                    },
                },
            });
            res.json({
                count,
                msg: result,
            });
        } else {
            res.json({
                msg: result,
            });
        }
    } else {
        const data = await client.announcments.findMany({
            where: {
                type: "admission",
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
            const count = await client.announcments.count({
                where: {
                    type: "admission",
                },
            });
            res.json({
                msg: data,
                count,
            });
        }
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
