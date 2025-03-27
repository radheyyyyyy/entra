import get from 'axios';
import { load } from 'cheerio';
import { writeFileSync } from 'fs';
import puppeteer from 'puppeteer';

const classname = "jsx-3230181281 clg-column d-flex align-items-start"  
const url = "https://collegedunia.com/gujarat-colleges"
const linkclass = "jsx-3230181281 college_name underline-on-hover"

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
    
    // Wait for initial content to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Implement scrolling to load more content
    console.log('Starting to scroll the page to load more content...');
    
    // Get initial page height
    let lastHeight = await page.evaluate(() => document.body.scrollHeight);
    
    // Number of times to scroll
    const scrollAttempts = 10; // Adjust based on how much content you want to load
    
    for (let i = 0; i < scrollAttempts; i++) {
      console.log(`Scroll attempt ${i + 1}/${scrollAttempts}`);
      
      // Scroll to the bottom of the page
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      
      // Wait for new content to load
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Get new page height
      const newHeight = await page.evaluate(() => document.body.scrollHeight);
      
      // If height didn't change, we've reached the bottom
      if (newHeight === lastHeight) {
        console.log('Reached the bottom of the page or no more content is loading');
        break;
      }
      
      lastHeight = newHeight;
    }
    
    // Take a screenshot after scrolling
    await page.screenshot({ path: 'scrolled-page-screenshot.png', fullPage: true });
    console.log('Screenshot of scrolled page saved to scrolled-page-screenshot.png');
    
    // Now extract all the college links
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
    }, linkclass);
    
    console.log(`Found ${colleges.length} colleges with class "${linkclass}".`);
    
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