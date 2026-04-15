const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  console.log('Opening Z-Image...');
  await page.goto('https://zimage.run/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  
  // Find and fill prompt
  const promptInput = await page.$('textarea');
  if (promptInput) {
    await promptInput.fill('Deep house music album cover, sunset at beach, warm orange and purple sky, ocean waves, peaceful calm vibe, minimal design');
    console.log('Prompt entered!');
    
    // Find generate button
    const generateBtn = await page.$('button:has-text("Generate")');
    if (generateBtn) {
      await generateBtn.click();
      console.log('Clicked generate!');
    }
    
    // Wait for images to appear - check periodically
    console.log('Waiting for images...');
    for (let i = 0; i < 6; i++) {
      await page.waitForTimeout(5000);
      
      const images = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => ({src: img.src, width: img.naturalWidth}))
                   .filter(img => img.width > 100);
      });
      
      console.log(`Check ${i+1}: Found ${images.length} images`);
      
      const generatedImages = images.filter(img => 
        img.src.includes('files.zimage.run') || img.src.includes('blob:')
      );
      
      if (generatedImages.length > 0) {
        console.log('Found generated images!');
        console.log(generatedImages.map(i => i.src).join('\n'));
        
        // Download first one
        const firstUrl = generatedImages[0].src;
        const response = await page.request.get(firstUrl);
        const buffer = await response.body();
        fs.writeFileSync('/root/.agent-chat-gateway/work/opencode_agent/covers/low_tide_cover.png', buffer);
        console.log('Downloaded!');
        break;
      }
    }
    
    // Take screenshot for debugging
    await page.screenshot({ path: '/root/.agent-chat-gateway/work/opencode_agent/covers/debug.png' });
  }
  
  await browser.close();
})();