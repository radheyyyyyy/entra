import mongoose, { trusted } from "mongoose";
import { Schema, model } from "mongoose";
await mongoose.connect(
    "mongodb+srv://mahiradhey0204:entra@cluster0.kc5ch1h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
console.log("Connected to mongoDB");

const schema = mongoose.Schema({
    link: String,
    source: String,
    title: String,
    date: {
        type: Date,
        default: Date.now,
    },
    isFresh: {
        type: Boolean,
        default: true,
    },
    category:{
        type: String,
        default:"exam"
    },
    location:{
        type: String,
        default:"India"
    }
});


export const news = mongoose.model("news", schema);
