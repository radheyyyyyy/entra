import { PlaywrightCrawler, Dataset } from "crawlee";
import { examAnnouncement } from "../mongo/db.js";

// PlaywrightCrawler crawls the web using a headless
// browser controlled by the Playwright library.
// const crawler = new PlaywrightCrawler({
//     // Use the requestHandler to process each of the crawled pages.
//     async requestHandler({ request, page, enqueueLinks, log }) {
//         const title = await page.title();
//         log.info(`Title of ${request.loadedUrl} is '${title}'`);
//         // Save results as JSON to ./storage/datasets/default
//         const pdfLinks = await page.$$eval('a[href$=".pdf"]', (links) => {
//             return links.map((link) => {
//                 return {
//                     url: link.href,
//                     text: link.textContent.trim(),
//                 };
//             });
//         });
//         pdfLinks.forEach(async (el) => {
//             await Dataset.pushData({ text: el.text, url: el.url });
//         });
//         await Dataset.pushData({ title, url: request.loadedUrl });
//         await Dataset.exportToCSV("output");

//         // Extract links from the current page
//         // and add them to the crawling queue.
//         // await enqueueLinks({
//         //     transformRequestFunction: (req) => {
//         //         // Skip all PDF links - don't add them to the queue
//         //         if (req.url.endsWith('.pdf') || req.url.includes('.pdf?') || req.url.toLowerCase().includes('/pdf/')) {
//         //             log.info(`Excluding PDF link: ${req.url}`);
//         //             return false; // Return false to exclude the URL
//         //         }
//         //         return req; // Return the request to include it
//         //     }
//         // });
//     },
//     maxRequestsPerCrawl: 50,
// });
// // Uncomment this option to see the browser window.
// // headless: false,

// // Let's limit our crawls to make our tests shorter and safer.

// // Add first URL to the queue and start the crawl.
// await crawler.run(["https://www.nta.ac.in"]);

async function jeeMainCrawler() {
    const crawler = new PlaywrightCrawler({
        async requestHandler({ request, page, log }) {
            log.info(`Processing ${request.url}`);
          
            const jeeDocLinks = await page.$$eval('a[download][href*=".pdf"][rel="noopener noreferrer"]', (links) => {
                return links.map((link) => ({
                    title: link.textContent.trim(),
                    link: link.href,
                    category: "Undergraduate",
                    examName: "JEE Mains",
                }));
            });

            // Push each link as a separate entry, not the entire array
            if (jeeDocLinks.length > 0) {
                // log.info(`Found ${jeeDocLinks.length} JEE document links`);
                for (const link of jeeDocLinks) {
                    // log.info(`Saving link: ${link.url}`);
                    link.src = request.url;
                    // await Dataset.pushData(link);
                }
                await examAnnouncement.create(jeeDocLinks);
                // Verify data was pushed by checking dataset count
                // const { count } = await Dataset.getInfo();
                // log.info(`Dataset now contains ${count} items`);
            } else {
                log.info("No matching JEE document links found on this page");
            }

            // Export to CSV - make sure this is not commented out
            // await Dataset.exportToJSON("outputjeemains");
            // log.info("Dataset exported to CSV as 'outputjeemains'");
        },
        // Add additional options for better reliability
    });

    // Pass the URL in an array
    await crawler.run(["https://jeemain.nta.nic.in/public-notices", "https://jeemain.nta.nic.in"]);
}

await jeeMainCrawler();
