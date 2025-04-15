import get from 'axios';
import { load } from 'cheerio';
import { writeFileSync } from 'fs';
import puppeteer from 'puppeteer';


const classname = "jsx-3230181281 clg-column d-flex align-items-start"  
const url = "https://collegedunia.com/gujarat-colleges"
const linkclass = "jsx-3230181281 college_name underline-on-hover"



// async function fetchCollegeLinks() {
//   try {
//     console.log(`Fetching college links from ${url}...`);
    
//     // Configure axios with headers that mimic a real browser
//     const headers = {
//       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
//       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//       'Accept-Language': 'en-US,en;q=0.9',
//       'Accept-Encoding': 'gzip, deflate, br',
//       'Connection': 'keep-alive',
//       'Cache-Control': 'max-age=0',
//       'Sec-Fetch-Dest': 'document',
//       'Sec-Fetch-Mode': 'navigate',
//       'Sec-Fetch-Site': 'none',
//       'Sec-Fetch-User': '?1',
//       'Upgrade-Insecure-Requests': '1',
//       'Referer': 'https://www.google.com/'
//     };

//     // Fetch the HTML content of the page with browser-like headers
//     const response = await get(url, { headers });
//     const html = response.data;
    
//     // Load the HTML into cheerio
//     const $ = load(html);
    
//     // Initialize arrays to store results
//     const colleges = [];
    
//     // Find all elements with the specified class
//     $(`.${linkclass.replace(/\./g, ' ')}`).each((index, element) => {
//       // For each container element, find the link with the specified class
//       const linkElement = $(element).find(`.${linkclass.replace(/\./g, ' ')}`);
      
//       if (linkElement.length) {
//         const collegeName = linkElement.text().trim();
//         const collegeUrl = linkElement.attr('href');
        
//         // Ensure the URL is absolute
//         const fullUrl = collegeUrl.startsWith('http') 
//           ? collegeUrl 
//           : `https://collegedunia.com${collegeUrl}`;
        
//         colleges.push({
//           name: collegeName,
//           url: fullUrl
//         });
//       }
//     });
    
//     console.log(`Found ${colleges.length} colleges.`);
    
//     // Save the results to a JSON file
//     writeFileSync('gujarat-colleges.json', JSON.stringify(colleges, null, 2));
//     console.log('Results saved to gujarat-colleges.json');
    
//     return colleges;
//   } catch (error) {
//     console.error('Error fetching college links:', error.message);
//     if (error.response) {
//       console.error(`Status code: ${error.response.status}`);
//       console.error('Response headers:', error.response.headers);
//       console.error('Response data preview:', error.response.data.substring(0, 500));
//     }
//     throw error;
//   }
// }

// Puppeteer approach is more likely to work, so let's focus on improving it
async function fetchCollegeLinksWithPuppeteer() {
  let browser;
  try {
    console.log('Attempting to fetch with puppeteer...');
    
    // Launch a headless browser
    browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set a user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Navigate to the URL
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    // Wait a bit to ensure JavaScript has executed
    await new Promise(resolve => setTimeout(resolve, 5000));
    // IMPORTANT: Pass the linkclass as a parameter to evaluate
    // Note how we're passing linkclass as an argument here
    const colleges = await page.evaluate((targetClass) => {
      const results = [];
      
      // The class selector needs to convert spaces to dots for CSS selection
      const selector = `.${targetClass.replace(/\s+/g, '.')}`;
      console.log(`Using selector: ${selector}`);
      
      // Look for elements with the exact class name we want
      const elements = document.querySelectorAll(selector);
      
      console.log(`Found ${elements.length} elements with class ${targetClass}`);
      
      // Process each element
      elements.forEach(element => {
        const collegeName = element.textContent.trim();
        const collegeUrl = element.href || element.getAttribute('href');
        
        if (collegeName && collegeUrl) {
          results.push({
            name: collegeName,
            url: collegeUrl
          });
        }
      });
      
      return results;
    },linkclass); // This is where we pass the linkclass variable
    
    console.log(`Found ${colleges.length} colleges with class "${linkclass}".`);
    
    // If no colleges found, dump the HTML for inspection
    // if (colleges.length === 0) {
    //   const html = await page.content();
    //   writeFileSync('page-html.html', html);
    //   console.log('HTML content saved to page-html.html for inspection');
      
    //   // Also save the classes in the document for easier inspection
    //   const classes = await page.evaluate(() => {
    //     const allElements = document.querySelectorAll('*');
    //     const classes = new Set();
        
    //     allElements.forEach(el => {
    //       if (el.className && typeof el.className === 'string') {
    //         el.className.split(' ').forEach(cls => {
    //           if (cls) classes.add(cls);
    //         });
    //       }
    //     });
        
    //     return Array.from(classes).sort();
    //   });
      
    //   writeFileSync('page-classes.json', JSON.stringify(classes, null, 2));
    //   console.log('All classes on the page saved to page-classes.json');
    // }
    
    // Save the results
    writeFileSync('gujarat-colleges.json', JSON.stringify(colleges, null, 2));
    console.log('Results saved to gujarat-colleges.json');
    
    return colleges;
  } catch (error) {
    console.error('Error using puppeteer:', error.message);
    console.error(error.stack);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Execute the function
fetchCollegeLinksWithPuppeteer()
  .then(colleges => {
    console.log(`Successfully scraped ${colleges.length} college links.`);
  })
  .catch(err => {
    console.error('Scraping failed:', err);
  });

export default { fetchCollegeLinksWithPuppeteer };