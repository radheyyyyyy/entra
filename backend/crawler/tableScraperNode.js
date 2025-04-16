import { CheerioCrawler } from 'crawlee';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

/**
 * This script uses CheerioCrawler to scrape a table from a webpage and 
 * stores the data in JSON format according to the examsData.js structure
 */

// Get current file path (ES Modules approach)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URL of the page containing the table to scrape
const TARGET_URL = 'https://jeeadv.ac.in/imp_dates.html'; // Replace with the actual URL

// Output file name - change this to match your target exam
const OUTPUT_FILE_NAME = 'importantDatesJee.json';

// Function to run the scraper
async function scrapeTableData() {
    console.log('Starting table scraper...');
    console.log('Current directory:', __dirname);

    const crawler = new CheerioCrawler({
        async requestHandler({ $, request, log }) {
            log.info(`Scraping table data from ${request.url}...`);

            // Extract data from the table using Cheerio selectors
            const importantDates = await extractTableData($, log);

            // Log the extracted data
            log.info(`Extracted ${importantDates.length} important dates`);
            console.log(importantDates);

            // Save data to JSON file
            await saveToJson(importantDates);
            
            // Generate formatted output for examsData.js
            const formattedOutput = formatForExamsData(importantDates);
            await saveFormattedOutput(formattedOutput);
        },
        maxRequestsPerCrawl: 1,
    });

    // Run the crawler on the target URL
    await crawler.run([TARGET_URL]);
    console.log('Scraping completed!');
}

// Function to extract data from the table using Cheerio
function extractTableData($, log) {
    try {
        // Find the table with the specific class
        const table = $('table.table-bordered.border-success');
        
        if (table.length === 0) {
            // If the specific table isn't found, try to get any table
            log.info('Specific table not found, trying to find any table...');
            const anyTable = $('table');
            
            if (anyTable.length === 0) {
                log.error('No tables found on the page');
                return [];
            }
            
            log.info('Found a table, attempting to extract data...');
        }
        
        // Create array to store the extracted data
        const importantDates = [];
        
        // Process each row in the tbody
        $('table tbody tr').each((index, row) => {
            const cells = $(row).find('td');
            
            if (cells.length >= 3) {
                // Skip Sl. No. column (cells[0]) and extract event and date
                const event = $(cells[1]).text().trim();
                const date = $(cells[2]).text().trim();
                
                importantDates.push({
                    event: event,
                    date: date
                });
            }
        });
        
        log.info(`Found ${importantDates.length} important dates in the table`);
        return importantDates;
    } catch (error) {
        log.error('Error extracting table data:', error);
        return [];
    }
}

// Function to resolve the output directory path
function resolveOutputDir() {
    // Handle different project structures by attempting multiple paths
    const possiblePaths = [
        path.resolve(__dirname, '../../frontend/src/data/scraped'),
        path.resolve(__dirname, '../../../frontend/src/data/scraped'),
        path.resolve(process.cwd(), 'frontend/src/data/scraped')
    ];
    
    console.log('Trying possible output paths:');
    possiblePaths.forEach(p => console.log('- ' + p));
    
    // Return the first path - we'll create it if it doesn't exist
    return possiblePaths[0];
}

// Function to save data to JSON file
async function saveToJson(data) {
    try {
        const outputDir = resolveOutputDir();
        
        // Ensure directory exists
        await fs.mkdir(outputDir, { recursive: true });
        
        // Save raw JSON data
        const jsonPath = path.join(outputDir, OUTPUT_FILE_NAME);
        await fs.writeFile(jsonPath, JSON.stringify(data, null, 2));
        
        console.log(`Data saved to ${jsonPath}`);
    } catch (error) {
        console.error('Error saving data to JSON file:', error);
    }
}

// Function to format data for examsData.js
function formatForExamsData(data) {
    let output = 'importantDates: [\n';
    
    data.forEach((item, index) => {
        const comma = index < data.length - 1 ? ',' : '';
        output += `            { event: "${item.event}", date: "${item.date}" }${comma}\n`;
    });
    
    output += '        ],';
    
    return output;
}

// Function to save formatted output for examsData.js
async function saveFormattedOutput(formattedOutput) {
    try {
        const outputDir = resolveOutputDir();
        
        // Ensure directory exists
        await fs.mkdir(outputDir, { recursive: true });
        
        // Save formatted output
        const outputPath = path.join(outputDir, 'formattedDates.js');
        await fs.writeFile(outputPath, formattedOutput);
        
        console.log(`Formatted output saved to ${outputPath}`);
    } catch (error) {
        console.error('Error saving formatted output:', error);
    }
}

// Run the scraper
scrapeTableData().catch(console.error); 