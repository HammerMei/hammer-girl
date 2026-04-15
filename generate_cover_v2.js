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
  
  // Find and fill prompt for Low Tide
  const promptInput = await page.$('textarea');
  if (promptInput) {
    await promptInput.fill('Deep house music album cover, sunset at beach, warm orange and purple sky, calm ocean waves, peaceful minimal design, electronic music style, no text');
    console.log('Prompt entered!');
    
    // Click generate
    const generateBtn = await page.$('button:has-text("Generate")');
    if (generateBtn) {
      await generateBtn.click();
      console.log('Clicked generate!');
    }
    
    // Wait and look for the newly generated images
    console.log('Waiting for new images...');
    await page.waitForTimeout(20000);
    
    // Get all images with their positions and src
    const allImages = await page.evaluate(() => {
      const container = document.querySelector('div[class*="grid"]') || document.body;
      const imgs = Array.from(container.querySelectorAll('img'));
      return imgs.map((img, index) => ({
        index,
        src: img.src,
        width: img.naturalWidth,
        top: img.offsetTop
      }));
    });
    
    console.log('All images found:', allImages.length);
    
    // Try to find newly generated images - they should be in a specific container
    // Let's look for images with specific naming pattern
    const generatedImages = await page.evaluate(() => {
      // Look for images in the generation result area
      const resultDiv = Array.from(document.querySelectorAll('div')).find(div => {
        const style = window.getComputedStyle(div);
        return style.display === 'grid' && div.querySelectorAll('img').length >= 4;
      });
      
      if (resultDiv) {
        const imgs = Array.from(resultDiv.querySelectorAll('img'));
        return imgs.map(img => img.src).filter(src => !src.includes('logo'));
      }
      return [];
    });
    
    console.log('Generated images:', generatedImages);
    
    if (generatedImages.length > 0) {
      // Download the first generated image (should be the main result)
      const response = await page.request.get(generatedImages[0]);
      const buffer = await response.body();
      fs.writeFileSync('/root/.agent-chat-gateway/work/opencode_agent/covers/low_tide_cover_v2.png', buffer);
      console.log('Downloaded correct image!');
    } else {
      console.log('Could not find generated images, taking screenshot...');
      await page.screenshot({ path: '/root/.agent-chat-gateway/work/opencode_agent/covers/debug2.png' });
    }
  }
  
  await browser.close();
})();