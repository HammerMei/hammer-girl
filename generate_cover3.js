const { chromium } = require('playwright');

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
    
    // Wait and scroll to bottom to see results
    await page.waitForTimeout(15000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(3000);
    
    // Get all image sources
    const imageUrls = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => img.src).filter(src => src && !src.includes('data:image'));
    });
    
    console.log('Found image URLs:', imageUrls);
    
    // Take final screenshot
    await page.screenshot({ path: '/root/.agent-chat-gateway/work/opencode_agent/zimage_final.png' });
    console.log('Screenshot saved!');
    
    // Try to download first image if found
    if (imageUrls.length > 0) {
      const firstUrl = imageUrls[0];
      console.log('First image URL:', firstUrl);
      
      // Download the image
      const response = await page.request.get(firstUrl);
      const buffer = await response.body();
      require('fs').writeFileSync('/root/.agent-chat-gateway/work/opencode_agent/covers/low_tide_cover.png', buffer);
      console.log('Image downloaded!');
    }
  }
  
  await browser.close();
})();