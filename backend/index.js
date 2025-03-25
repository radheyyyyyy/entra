import express, { urlencoded } from "express";
import { client } from "./prisma/db.js";
const app = express();
app.use(express.json());

app.get("/announcements", async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit) || 10;
    const count = await client.annoucments.count();
    const data = await client.annoucments.findMany({
        take: limit,
        skip: (page-1)*limit
    });
    if (page == 1) {
        res.json({
            msg: data,
            count,
        });
        return;
    } else {
        res.json({
            msg: data,
        });
        return;
    }
});

app.listen(3000, () => console.log("App is listening on PORT 3000"));
