const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  
  console.log('Opening Z-Image...');
  await page.goto('https://zimage.run/');
  await page.waitForLoadState('networkidle');
  console.log('Page loaded!');
  
  // Wait for app to fully load
  await page.waitForTimeout(2000);
  
  // Try different selectors to find the prompt input
  let promptInput = await page.$('textarea');
  if (!promptInput) promptInput = await page.$('input[type="text"]');
  if (!promptInput) promptInput = await page.$('[contenteditable="true"]');
  
  if (promptInput) {
    console.log('Found input!');
    await promptInput.fill('Deep house music album cover, sunset at beach, warm orange and purple sky, ocean waves, peaceful calm vibe, minimalist modern design, electronic music style');
    console.log('Prompt entered!');
    
    // Find and click generate button
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await btn.textContent();
      if (text && text.toLowerCase().includes('generate')) {
        console.log('Clicking generate...');
        await btn.click();
        console.log('Generation started!');
        break;
      }
    }
    
    // Wait for images to appear
    console.log('Waiting for results...');
    await page.waitForTimeout(15000);
    
    // Take screenshot
    await page.screenshot({ path: '/root/.agent-chat-gateway/work/opencode_agent/zimage_screenshot2.png' });
    console.log('Screenshot saved!');
    
    // Try to find and download the first generated image
    const images = await page.$$('img[src*="blob"]');
    console.log(`Found ${images.length} blob images`);
    
    // Also check for download links
    const links = await page.$$('a[download]');
    console.log(`Found ${links.length} download links`);
    
  } else {
    console.log('Could not find input, taking screenshot...');
    await page.screenshot({ path: '/root/.agent-chat-gateway/work/opencode_agent/zimage_debug.png' });
  }
  
  await browser.close();
})();