const axios=require("axios")
const cheerio=require("cheerio");
const {news} = require("./db");
const mongoose = require("mongoose");
const allNews=[];
async function findLatestNews() {
    // Start all axios requests simultaneously
    const [ntaResponse, dheResponse, acpcResponse] = await Promise.all([
        axios.get("https://nta.ac.in/"),
        axios.get("https://www.education.gov.in/higher_education"),
        axios.get("https://gujacpc.admissions.nic.in/home-8/be-b-tech/")
    ]);

    // Process NTA news
    let $ = cheerio.load(ntaResponse.data);
    $('p').each((i, element) => {
        if ($(element).find("img").attr("src")) {
            let obj = {
                data: $(element).find("content").text().trim(),
                link: "https://nta.ac.in" + $(element).find("a").attr("href"),
                source: "nta"
            };
            allNews.push(obj);
        }
    });

    // Process DHE news
    $ = cheerio.load(dheResponse.data);
    $('a.pdfIcon').each((i, element) => {
        const obj = {
            data: $(element).text().trim(),
            link: $(element).attr("href").trim(),
            source: "department_of_higher_education"
        };
        allNews.push(obj);
    });

    // Process ACPC news
    $ = cheerio.load(acpcResponse.data);
    $('a.with-urlchange').each((i, element) => {
        const obj = {
            data: $(element).text().trim(),
            link: $(element).attr("href").trim(),
            source: "acpc"
        };
        allNews.push(obj);
    });
}

async function main() {
    console.log("Web crawler started")
    await findLatestNews();
    for (const ele of allNews) {
        const res=await news.find({
                link:ele.link,
                source:ele.source,
                title:ele.data
            });
        if(typeof (res[0])==="undefined"){
        await news.create({
            link:ele.link,
            source:ele.source,
            title:ele.data
        })
    }}

}

main().then(()=>{
    console.log("Web crawler stopped");
    mongoose.disconnect().then(r => {console.log("Db disconnected")} )
});



