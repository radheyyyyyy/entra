import express, { urlencoded } from "express";
import { client } from "./prisma/db.js";
const app = express();
app.use(express.json())
app.get("/announcements", async (req, res) => {
    const page = parseInt(req.query.page);
    const length = parseInt(req.query.length) || 10;
    const count = await client.annoucments.count();
    const data = await client.annoucments.findMany();
    console.log(page);
    
    if (page != 1) {
        res.json({
            msg: data,
        });
        return 
    }
    else
    {
        res.json({
            msg:data,
            count
        })
        return 
    }
});

app.listen(3000, () => console.log("App is listening on PORT 3000"));
