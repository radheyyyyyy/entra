import mongoose, { trusted } from "mongoose";
import {Schema,model} from "mongoose"
await mongoose.connect("mongodb://localhost:27018/entra")
    console.log("Connected to mongoDB")

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

const examAnnouncementSchema = new Schema({
    link:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    src:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now 
    },
    category:{
        type:String,
    },
    examName:{
        type:String
    }

}) 
export const news=mongoose.model('news',schema);
export const examAnnouncement = model("examannouncment",examAnnouncementSchema);
