import { readFileSync, writeFileSync } from 'fs';

// Read the existing JSON file
console.log('Reading gujarat-colleges.json...');
const collegesData = JSON.parse(readFileSync('./gujarat-colleges.json', 'utf8'));
console.log(`Found ${collegesData.length} total entries.`);

// Step 1: Remove exact duplicates (same URL)
const uniqueUrlMap = new Map();
collegesData.forEach(college => {
  // Normalize URLs by removing query parameters and trailing slashes
  const normalizedUrl = college.url.split('?')[0].replace(/\/$/, '');
  
  // Only keep the first occurrence of each URL
  if (!uniqueUrlMap.has(normalizedUrl)) {
    uniqueUrlMap.set(normalizedUrl, college);
  }
});

// Step 2: Filter out entries that aren't actually colleges
const filteredColleges = Array.from(uniqueUrlMap.values()).filter(college => {
  const url = college.url.toLowerCase();
  const name = college.name.trim();
  
  // Skip entries that are actually course pages, reviews, cutoffs, etc.
  const isNotSubPage = !url.includes('/courses-fees') && 
                      !url.includes('/placement') && 
                      !url.includes('/ranking') && 
                      !url.includes('/reviews') && 
                      !url.includes('/cutoff') &&
                      !url.includes('/admission') &&
                      !url.includes('/faculty');
  
  // Skip entries that have non-college titles
  const isNotMetaContent = !name.startsWith('₹') && 
                          !name.startsWith('#') && 
                          !name.includes('Package') &&
                          !name.includes('Fees') &&
                          !name.includes('Year') &&
                          !name.includes('FAQs') &&
                          !name.includes('Images') &&
                          name.length > 2;
  
  // College names typically contain specific keywords
  const collegeKeywords = ['college', 'institute', 'university', 'school', 'academy', 'engineering'];
  const containsCollegeKeyword = collegeKeywords.some(keyword => 
    url.includes(keyword) || name.toLowerCase().includes(keyword)
  );
  
  return isNotSubPage && isNotMetaContent && containsCollegeKeyword;
});

// Step 3: Sort colleges alphabetically by name
filteredColleges.sort((a, b) => a.name.localeCompare(b.name));

// Save filtered results
writeFileSync('./gujarat-colleges-filtered.json', JSON.stringify(filteredColleges, null, 2));
console.log(`Filtered from ${collegesData.length} to ${filteredColleges.length} entries.`);
console.log('Filtered list saved to gujarat-colleges-filtered.json'); 