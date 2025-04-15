import {client} from "../prisma/db.js";
import {news} from "./db.js";

const changeStream=news.watch();

changeStream.on("change",async (change)=>{
    if(change.operationType==='insert'){
        try{
            await client.announcments.create({
                data:{
                    id:change.fullDocument._id,
                    title:change.fullDocument.title,
                    link:change.fullDocument.link,
                    date:change.fullDocument.date,
                    type:change.fullDocument.type,
                    source:change.fullDocument.source
                }
            })
            await news.updateOne({
                _id:change.fullDocument._id
            },{isFresh:false})
        }
        catch (err){
            console.log(err)
            console.log("failed to insert in postgres database or data is already stored in database");
        }
    }

})

