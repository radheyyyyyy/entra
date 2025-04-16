import { load } from "cheerio";
import axios from "axios";
import {allNews} from "./examCrawler.js";
export async function findLatestAdmissionNews() {
    // Start all axios requests simultaneously
    const responses = await Promise.allSettled([
        axios.get("https://josaa.nic.in/"),
        axios.get("https://cetcell.mahacet.org/"),
        axios.get("https://cetonline.karnataka.gov.in/kea/"),
        axios.get("https://wbjeeb.nic.in"),
        axios.get("https://cee.kerala.gov.in/cee/"),
        axios.get("https://eapcet.tgche.ac.in/"),
        axios.get("https://gujacpc.admissions.nic.in/"),
        axios.get("https://viteee.vit.ac.in")

    ]);
    const [josaaResponse,cetcellResponse,karnatakaResponse,wbResponse,kerelaResponse,telanganaResponse,gujaratResponse,vitResponse]=responses;
    let $;

    //josaa news
    if(josaaResponse.status==='fulfilled'){
    $=load(josaaResponse.value.data);
    $('.slides li').each((index,element)=>{
        const obj={
            data:$(element).text().replace("New","").trim(),
            link:"https://josaa.nic.in/",
            source:"josaa",
            category:"admission"
        }
        allNews.push(obj)
    })}

    //maharashtra news
    if(cetcellResponse.status==='fulfilled'){
        $=load(cetcellResponse.value.data);
        $('.elementor-shortcode ul li').each((index,element)=>{
            const obj={
                data:$(element).find('a').text().trim(),
                link:$(element).find('a').attr('href'),
                source:"cetcell",
                category: "admission",
                location:"maharashtra"
            }
            allNews.push(obj)
        })
    }

    //karnataka news
    if(karnatakaResponse.status==='fulfilled'){
        $=load(karnatakaResponse.value.data);
        $('.card-body td').each((index,element)=>{
            const obj={
                data:$(element).find('a').text().trim(),
                link:$(element).find('a').attr('href'),
                source:"cetonline.karnataka.gov.in",
                category:"admission",
                location:"karnataka"
            }
            allNews.push(obj)
        })
    //westBengal news
    if(wbResponse.status==='fulfilled'){
        $=load(wbResponse.value.data);
        $('.with-urlchange').each((index,element)=>{
            const obj={
                data:$(element).text().replace("New","").trim(),
                link:"https://wbjeeb.nic.in",
                source:"wbjeeb",
                location:"West_bengal",
                category:"admission"
            }
            allNews.push(obj)
        })
    }

    //kerela news
    if(kerelaResponse.status==='fulfilled'){
        $=load(kerelaResponse.value.data);
        $('.marquee-content .marquee-item').each((index,element)=>{
            const obj={
                data:$(element).find('a').text().trim(),
                link:"https://cee.kerala.gov.in"+$(element).find('a').attr('href'),
                source:"cee.kerala.gov.in",
                location:"kerela",
                category:"admission"
            }
            allNews.push(obj)
        })
    }

    //telangana Response
    if(telanganaResponse.status==='fulfilled'){
        $=load(telanganaResponse.value.data);
        $('.card-body ul li').each((index,element)=>{
            const obj={
                data:$(element).text().trim(),
                link:"https://eapcet.tgche.ac.in/",
                source:"telangana_eapcet",
                location:"telangana",
                category:"admission"
            }
            allNews.push(obj)
        })
    }

    //gujarat Response
    if(gujaratResponse.status==='fulfilled'){
        $=load(gujaratResponse.value.data);
        $('.news-ticker-vertical li').each((index,element)=> {
            const obj = {
                data: $(element).find('a').text().trim(),
                link: $(element).find('a').attr('href'),
                source: "acpc",
                location: "gujarat",
                category: "admission"
            }
            allNews.push(obj)
        })
    }

    //vit
    if(vitResponse.status==='fulfilled'){
        $=load(vitResponse.value.data);
        $('mark').each((index,element)=>{
            const obj={
                data:$(element).text().trim(),
                link:$(element).find('a').attr('href'),
                source:"vit",
                category:"admission"
            }
            console.log(obj)
        })
    }

    }


}

