import { load } from "cheerio";
import { news } from "../mongo/db.js";
import axios from "axios";
const allNews = [];
async function findLatestNews() {
    // Start all axios requests simultaneously
    const [ntaResponse, dheResponse, acpcResponse,jeeNTAResponse,JEEadvResponse] = await Promise.all([
        await axios.get("https://nta.ac.in/"),
        await axios.get("https://www.education.gov.in/higher_education"),
        await axios.get("https://acpc.gujarat.gov.in/"),
        (await axios.get("https://jeemain.nta.nic.in/")).data,
        (await axios.get("https://jeeadv.ac.in/")).data
    ]);
    let $=load(JEEadvResponse);
    $('.announcement__text ').each((index,element)=>{

        let obj={
            data:$(element).find('h5').text().trim().replace('[Link]', ''),
            link:"https://jeeadv.ac.in/",
            source:"jeeadv"
        }
        console.log(obj)
        allNews.push(obj);
    })
    $=load(jeeNTAResponse);
    $('.gen-list:first ul li a').each((index,element)=>{
       let obj={
           data:$(element).text().trim(),
           link:$(element).attr("href"),
           source:"nta"
       };
       allNews.push(obj)
    })
    // Process NTA news
     $ = load(ntaResponse.data);
    $("p").each((i, element) => {
        if ($(element).find("img").attr("src")) {
            let obj = {
                data: $(element).find("content").text().trim(),
                link: "https://nta.ac.in" + $(element).find("a").attr("href"),
                source: "nta",
            };
            allNews.push(obj);
        }
    });

    // Process DHE news
    $ = load(dheResponse.data);
    $("a.pdfIcon").each((i, element) => {
        const obj = {
            data: $(element).text().trim(),
            link: $(element).attr("href").trim(),
            source: "department_of_higher_education",
        };
        allNews.push(obj);
    });

    // Process ACPC news
    $ = load(acpcResponse.data);
    $(".inner-grid-box").each((i, element) => {
        if ($(element).find("h3").text() === " Latest News") {
            $(element)
                .find(".home-page li a")
                .each((i, ele) => {
                    const obj = {
                        data: $(ele).text().trim(),
                        link: "https://acpc.gujarat.gov.in" + $(ele).attr("href"),
                        source: "acpc",
                    };
                    allNews.push(obj);
                });
        }
    });
}

async function main() {
    console.log("Web crawler started");
    await findLatestNews();
    for (const ele of allNews) {
        const res = await news.findOne({
            link: ele.link,
            source: ele.source,
            title: ele.data,
        });
        //if news failed to save in postgres=>res.isFresh is used
        //if news is not present in mongo=>res[0] is used
        if (res===null) {
            await news.create({
                link: ele.link,
                source: ele.source,
                title: ele.data,
            });
        } else if (res.isFresh) {
            news.deleteOne({ res });
            await news.create({
                link: ele.link,
                source: ele.source,
                title: ele.data,
            });
        }
    }
}


    main().then(() => {
        console.log("Web crawler stopped");
    });
