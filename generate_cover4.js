const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  
  console.log('Opening Z-Image...');
  await page.goto('https://zimage.run/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Find and fill prompt
  const promptInput = await page.$('textarea');
  if (promptInput) {
    await promptInput.fill('Deep house music album cover, sunset at beach, warm orange and purple sky, ocean waves, peaceful calm vibe, minimal design');
    console.log('Prompt entered!');
    
    // Find generate button
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await btn.textContent();
      if (text && text.toLowerCase().includes('generate')) {
        await btn.click();
        console.log('Generation started!');
        break;
      }
    }
    
    // Wait for generation
    await page.waitForTimeout(15000);
    
    // Get generated image URLs (from files.zimage.run/lunb)
    const imageUrls = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs
        .map(img => img.src)
        .filter(src => src && src.includes('files.zimage.run/lunb'))
        .slice(0, 4); // Get first 4 images
    });
    
    console.log('Generated images:', imageUrls);
    
    // Download each image
    for (let i = 0; i < imageUrls.length; i++) {
      try {
        const response = await page.request.get(imageUrls[i]);
        const buffer = await response.body();
        fs.writeFileSync(`/root/.agent-chat-gateway/work/opencode_agent/covers/low_tide_${i+1}.png`, buffer);
        console.log(`Downloaded image ${i+1}!`);
      } catch (e) {
        console.log(`Error downloading image ${i+1}:`, e.message);
      }
    }
    
    console.log('Done!');
  }
  
  await browser.close();
})();