import { load } from "cheerio";
import { news } from "../mongo/db.js";
import axios from "axios";
import {findLatestAdmissionNews} from "./admissionCrawler.js";
export const allNews = [];
async function findLatestNews() {
    // Start all axios requests simultaneously
    const responses = await Promise.allSettled([
        axios.get("https://nta.ac.in/"),
        axios.get("https://www.education.gov.in/higher_education"),
        axios.get("https://acpc.gujarat.gov.in/"),
        axios.get("https://jeemain.nta.nic.in/"),
        axios.get("https://jeeadv.ac.in/"),
        axios.get("https://neet.nta.nic.in"),
        axios.get("https://gujcet.gseb.org/")
    ]);
    const [ntaResponse, dheResponse, acpcResponse,jeeNTAResponse,JEEadvResponse,neetNTAResponse,gujcetResponse]=responses;
    let $;
    if(gujcetResponse.status==='fulfilled'){
        $=load(gujcetResponse.value.data);
        $('.notification a').each((index,element)=>{
            if($(element).attr("href")){
                let correctLink=$(element).attr("href").toString().startsWith("https")?$(element).attr("href").trim():"https://gujcet.gseb.org/"+$(element).attr("href").trim();
                const obj={
                    data:$(element).text().trim(),
                    link:correctLink,
                    source:"gujcetGSEB"
                }
                allNews.push(obj);
            }})

    }

    if(JEEadvResponse.status==='fulfilled'){
    $=load(JEEadvResponse.value.data);
    $('.announcement__text ').each((index,element)=>{
        let obj={
            data:$(element).find('h5').text().trim().replace('[Link]', ''),
            link:"https://jeeadv.ac.in/",
            source:"jeeadv"
        }
        allNews.push(obj);
    })
    }
    if(neetNTAResponse.status==='fulfilled') {
        $ = load(neetNTAResponse.value.data);
        $('.gen-list:first ul li').each((index, element) => {
            const obj = {
                data: $(element).find('a').text().trim(),
                link: $(element).find('a').attr("href"),
                source: "neetNTA"
            }
            allNews.push(obj)
        })
    }
    if(jeeNTAResponse.status==='fulfilled') {
        $ = load(jeeNTAResponse.value.data);
        $('.gen-list:first ul li a').each((index, element) => {
            let obj = {
                data: $(element).text().trim(),
                link: $(element).attr("href"),
                source: "nta"
            };
            allNews.push(obj)
        })
    }
    if(ntaResponse.status==='fulfilled') {
        // Process NTA news
        $ = load(ntaResponse.value.data);
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
    }
    // Process DHE news
    if(dheResponse.status==='fulfilled') {
        $ = load(dheResponse.value.data);
        $("a.pdfIcon").each((i, element) => {
            const obj = {
                data: $(element).text().trim(),
                link: $(element).attr("href").trim(),
                source: "department_of_higher_education",
            };
            allNews.push(obj);
        });
    }
    // Process ACPC news
    if(acpcResponse.status==='fulfilled') {
        $ = load(acpcResponse.value.data);
        $(".inner-grid-box").each((i, element) => {
            if ($(element).find("h3").text() === " Latest News") {
                $(element)
                    .find(".home-page li a")
                    .each((i, ele) => {
                        const obj = {
                            data: $(ele).text().trim(),
                            link: "https://acpc.gujarat.gov.in" + $(ele).attr("href"),
                            source: "acpc",
                            location:"gujarat"
                        };
                        allNews.push(obj);
                    });
            }
        });
    }
}

async function main() {
    console.log("Web crawler started");
    await findLatestNews();
    await findLatestAdmissionNews();
    await Promise.all(allNews.map(async (ele) => {
        const res = await news.findOne({ link: ele.link, source: ele.source, title: ele.data });
        if (!res || res.isFresh) {
            if (res && res.isFresh) await news.deleteOne({ _id: res._id });
            await news.create({
                link: ele.link,
                source: ele.source,
                title: ele.data,
                category: ele.category,
                location:ele.location
            });
        }
    }));

}


    main().then(() => {
        console.log("Web crawler stopped");
    });
