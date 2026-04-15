const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('Opening Z-Image...');
  await page.goto('https://zimage.run/');
  
  // Wait for page to load
  await page.waitForLoadState('networkidle');
  console.log('Page loaded!');
  
  // Try to find the prompt input
  const promptInput = await page.$('textarea');
  if (promptInput) {
    console.log('Found prompt input!');
    await promptInput.fill('A beautiful deep house music album cover, sunset at the beach, melodic chords, calm ocean waves, warm orange and purple sky, modern electronic music style, minimalist design');
    console.log('Prompt entered!');
    
    // Find and click generate button
    const generateBtn = await page.$('button:has-text("Generate")');
    if (generateBtn) {
      console.log('Clicking generate...');
      await generateBtn.click();
      console.log('Generation started!');
      
      // Wait for results
      await page.waitForTimeout(10000);
      console.log('Waited for generation...');
      
      // Try to get the image
      const images = await page.$$('img');
      console.log(`Found ${images.length} images`);
      
      // Take screenshot
      await page.screenshot({ path: '/root/.agent-chat-gateway/work/opencode_agent/zimage_screenshot.png' });
      console.log('Screenshot saved!');
    }
  } else {
    console.log('Could not find prompt input');
  }
  
  await browser.close();
})();