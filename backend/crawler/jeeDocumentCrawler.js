import { PlaywrightCrawler, Dataset, log } from "crawlee";

// Create a specialized crawler to extract JEE PDF download links
async function extractJeeDocuments(startUrls) {
    const crawler = new PlaywrightCrawler({
        // Enable request handling
        async requestHandler({ request, page, log }) {
            log.info(`Processing page: ${request.url}`);
            
            try {
                // Specifically target links with the pattern from the image
                // <a download="" href="https://cdnbbsr.s3waas.gov.in/..." title="download" target="_blank" rel="noopener noreferrer">
                const jeeDocLinks = await page.$$eval('a[download][href*=".pdf"][rel="noopener noreferrer"]', (links) => {
                    return links.map(link => ({
                        text: link.textContent.trim(),
                        url: link.href,
                        target: link.getAttribute('target') || ''
                    }));
                });
                
                if (jeeDocLinks.length > 0) {
                    log.info(`Found ${jeeDocLinks.length} JEE document links`);
                    
                    // Add category and exam information and save to dataset
                    for (const link of jeeDocLinks) {
                        await Dataset.pushData({
                            text: link.text,
                            url: link.url, 
                            target: link.target,
                            category: "undergraduate",
                            exam: "JEE",
                            sourceUrl: request.url,
                            foundAt: new Date().toISOString()
                        });
                    }
                } else {
                    log.info('No matching JEE document links found on this page');
                }
            } catch (error) {
                log.error(`Error processing page ${request.url}: ${error.message}`);
            }
        },
        // Limit crawl depth and requests
        maxRequestsPerCrawl: 200,
        maxRequestRetries: 1,
        headless: true
    });
    
    // Start the crawler
    await crawler.run(startUrls);
    
    // Export the results
    await Dataset.exportToJSON('jee_documents');
    log.info('JEE document extraction complete. Results exported to JSON.');
}

// Function to run with specific URLs
export async function runJeeDocumentCrawler() {
    const targetUrls = [
        'https://jeemain.nta.nic.in/public-notices',
    ];
    
    console.log('Starting JEE document extraction...');
    await extractJeeDocuments(targetUrls);
    console.log('JEE document extraction completed!');
}

// Run the crawler if this script is executed directly
if (process.argv[1].endsWith('jeeDocumentCrawler.js')) {
    runJeeDocumentCrawler().catch(err => {
        console.error('Error running JEE document crawler:', err);
        process.exit(1);
    });
} 
