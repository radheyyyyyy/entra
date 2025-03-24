import mongoose from "mongoose";
import {client} from "../prisma/db.js";
mongoose.connect("mongodb+srv://mahiradhey0204:@cluster0.kc5ch1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=> {
    console.log("Connected to mongoDB")
});
const schema=mongoose.Schema({
    link:String,
    source:String,
    title:String,
    date:{
        type:Date,default:Date.now
    },
    isFresh:{
        type:Boolean,default:true
    }
})
export const news=mongoose.model('news',schema);

