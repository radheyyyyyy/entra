const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/").then(()=> {
    console.log("Connected to mongoDB")
});
const schema=mongoose.Schema({
    link:String,
    source:String,
    data:String
})
const news=mongoose.model('news',schema);

module.exports={
    news
}