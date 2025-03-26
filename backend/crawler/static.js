const classname = "jsx-3230181281.clg-column.d-flex.align-items-start"  
const url = "https://collegedunia.com/gujarat-colleges"
const linkclass = "jsx-3230181281.college_name.underline-on-hover"

import get from 'axios';
import { load } from 'cheerio';
import { writeFileSync } from 'fs';
import puppeteer from 'puppeteer';

async function fetchCollegeLinks() {
  try {
    console.log(`Fetching college links from ${url}...`);
    
    // Configure axios with headers that mimic a real browser
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Cache-Control': 'max-age=0',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'Referer': 'https://www.google.com/'
    };

    // Fetch the HTML content of the page with browser-like headers
    const response = await get(url, { headers });
    const html = response.data;
    
    // Load the HTML into cheerio
    const $ = load(html);
    
    // Initialize arrays to store results
    const colleges = [];
    
    // Find all elements with the specified class
    $(`.${classname.replace(/\./g, ' ')}`).each((index, element) => {
      // For each container element, find the link with the specified class
      const linkElement = $(element).find(`.${linkclass.replace(/\./g, ' ')}`);
      
      if (linkElement.length) {
        const collegeName = linkElement.text().trim();
        const collegeUrl = linkElement.attr('href');
        
        // Ensure the URL is absolute
        const fullUrl = collegeUrl.startsWith('http') 
          ? collegeUrl 
          : `https://collegedunia.com${collegeUrl}`;
        
        colleges.push({
          name: collegeName,
          url: fullUrl
        });
      }
    });
    
    console.log(`Found ${colleges.length} colleges.`);
    
    // Save the results to a JSON file
    writeFileSync('gujarat-colleges.json', JSON.stringify(colleges, null, 2));
    console.log('Results saved to gujarat-colleges.json');
    
    return colleges;
  } catch (error) {
    console.error('Error fetching college links:', error.message);
    if (error.response) {
      console.error(`Status code: ${error.response.status}`);
      console.error('Response headers:', error.response.headers);
      console.error('Response data preview:', error.response.data.substring(0, 500));
    }
    throw error;
  }
}

// Puppeteer approach is more likely to work, so let's focus on improving it
async function fetchCollegeLinksWithPuppeteer() {
  let browser;
  try {
    console.log('Attempting to fetch with puppeteer...');
    
    // Launch a headless browser
    browser = await puppeteer.launch({
      headless: false, // Use non-headless to see what's happening
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to look like a desktop
    await page.setViewport({
      width: 1366,
      height: 768
    });
    
    // Set a user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Navigate to the URL
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait a bit longer to ensure JavaScript has executed
    await page.waitForTimeout(8000);
    
    // Take a screenshot to see what's rendering
    await page.screenshot({ path: 'page-screenshot.png' });
    console.log('Screenshot saved to page-screenshot.png');
    
    // Look for college name links without relying on specific class names
    const colleges = await page.evaluate(() => {
      const results = [];
      
      // First approach: Look for college name links using typical patterns
      const collegeLinks = Array.from(document.querySelectorAll('a[href*="/college/"]'));
      
      if (collegeLinks.length > 0) {
        collegeLinks.forEach(link => {
          const collegeName = link.textContent.trim();
          const collegeUrl = link.href;
          
          if (collegeName && collegeUrl) {
            results.push({
              name: collegeName,
              url: collegeUrl
            });
          }
        });
      } else {
        // Backup approach: Look for any links that might be college links
        const allLinks = Array.from(document.querySelectorAll('a'));
        const potentialCollegeLinks = allLinks.filter(link => {
          const href = link.href.toLowerCase();
          return (href.includes('/college/') || 
                  href.includes('college') || 
                  href.includes('university') || 
                  href.includes('institute')) && 
                  link.textContent.trim().length > 0;
        });
        
        potentialCollegeLinks.forEach(link => {
          const collegeName = link.textContent.trim();
          const collegeUrl = link.href;
          
          results.push({
            name: collegeName,
            url: collegeUrl
          });
        });
      }
      
      return results;
    });
    
    console.log(`Found ${colleges.length} colleges.`);
    
    // If still no colleges, dump the HTML for inspection
    if (colleges.length === 0) {
      const html = await page.content();
      writeFileSync('page-html.html', html);
      console.log('HTML content saved to page-html.html for inspection');
    }
    
    // Save the results
    writeFileSync('gujarat-colleges.json', JSON.stringify(colleges, null, 2));
    console.log('Results saved to gujarat-colleges.json');
    
    return colleges;
  } catch (error) {
    console.error('Error using puppeteer:', error.message);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Execute the puppeteer approach directly
fetchCollegeLinksWithPuppeteer()
  .then(colleges => {
    console.log(`Successfully scraped ${colleges?.length || 0} college links.`);
  })
  .catch(err => {
    console.error('Scraping failed:', err);
  });

export default { fetchCollegeLinks, fetchCollegeLinksWithPuppeteer };