import express from "express";
import { client } from "../prisma/db.js";
import cors from "cors";
const app = express();
app.use(express.json())
app.use(cors())
app.get("/announcements", async (req, res) => {
    const page = parseInt(req.query.page);
    const length = parseInt(req.query.length) || 10;
    const count = await client.announcments.count();
    const data = await client.announcments.findMany();
    console.log(page);
    
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

app.listen(3000, () => console.log("App is listening on PORT 3000"));
