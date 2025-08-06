const { chromium } = require('playwright-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

const randomWait = () => Math.floor(Math.random() * 30) * 1000;

async function randomMouseMove(page) {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  await page.mouse.move(x, y);
  await page.mouse.wheel(0, y);
}

async function scenario2(page) {
  console.log('Running scenario 2');
  await randomMouseMove(page);
  await page.waitForTimeout(randomWait());
  await randomMouseMove(page);

  if (Math.random() < 0.3) {
    try {
      console.log('Clicking next-btn');
      await randomMouseMove(page);
      await page.locator('[data-test-id="next-btn"]').click();
      await randomMouseMove(page);
    } catch (e) {
      console.error('Failed to click next-btn:', e);
    }
  }
  await randomMouseMove(page);
  await page.waitForTimeout(randomWait());
  await randomMouseMove(page);

  if (true || Math.random() < 0.8) {
    const ads = [
      'vertical-ad-1',
      'vertical-ad-2',
      'vertical-ad-3',
      'vertical-ad-4',
      'horizontal-ad-3',
      'horizontal-ad-2',
      'horizontal-ad-1',
    ];
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    try {
      await randomMouseMove(page);
      console.log(`Clicking vertical-ad: ${randomAd}`);
      await randomMouseMove(page);

      await page.locator(`[id="${randomAd}"]`).first().scrollIntoViewIfNeeded();
      await page.locator(`[id="${randomAd}"]`).first().hover();
      try {
        await page.locator(`[id="${randomAd}"]`).first().click({ timeout: 30000 });
      } catch {}
    } catch (e) {
      console.error(`Failed to click ${randomAd}:`, e);
    }
  }
  await randomMouseMove(page);
  await page.waitForTimeout(randomWait());
  await randomMouseMove(page);
}

async function scenario3(page) {
  console.log('Running scenario 3');
  await randomMouseMove(page);
  await page.waitForTimeout(randomWait());
  if (Math.random() < 0.3) {
    try {
      console.log('Clicking next-btn');
      await randomMouseMove(page);
      await page.locator('[data-test-id="next-btn"]').click();
      await randomMouseMove(page);
    } catch (e) {
      console.error('Failed to click next-btn:', e);
    }
    await randomMouseMove(page);
    await page.waitForTimeout(randomWait());
    await randomMouseMove(page);
  }

  const videos = [
    'video-card-1',
    'video-card-2',
    'video-card-5',
    'video-card-6',
    'video-card-9',
    'video-card-10',
  ];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  try {
    console.log(`Clicking video-card: ${randomVideo}`);
    await randomMouseMove(page);
    await page.locator(`[data-test-id="${randomVideo}"]`).first().click();
    await randomMouseMove(page);
  } catch (e) {
    console.error(`Failed to click ${randomVideo}:`, e);
    throw e;
  }
  await randomMouseMove(page);
  await page.waitForTimeout(randomWait());
  await randomMouseMove(page);

  if (true || Math.random() < 0.8) {
    const videoAds = [
      'video-ad-1',
      'video-ad-2',
      'video-ad-3',
      'video-ad-4',
      'video-ad-5',
      'video-ad-6',
    ];
    const randomVideoAd = videoAds[Math.floor(Math.random() * videoAds.length)];
    try {
      await randomMouseMove(page);
      await randomMouseMove(page);

      console.log(`Clicking video-ad: ${randomVideoAd}`);
      await page.locator(`[id="${randomVideoAd}"]`).first().scrollIntoViewIfNeeded();
      await page.locator(`[id="${randomVideoAd}"]`).first().hover();
      try {
        await page.locator(`[id="${randomVideoAd}"]`).first().click({ timeout: 30000 });
      } catch {}
      await randomMouseMove(page);
    } catch (e) {
      console.error(`Failed to click ${randomVideoAd}:`, e);
    }
    await randomMouseMove(page);
    await page.waitForTimeout(randomWait());
    await randomMouseMove(page);
  }
}

async function simulateUserInteraction(page) {
  const baseUrl = 'https://freehqpornxxx.com/';
  const scenarios = [scenario2, scenario3];
  let randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot1 = await page.screenshot({
    path: 'playwright-report/screenshot1.png',
    fullPage: true,
  });
  // testInfo.attach('screenshot1', {
  //   body: screenshot1,
  //   contentType: 'image/png',
  // });

  randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot2 = await page.screenshot({
    path: 'playwright-report/screenshot2.png',
    fullPage: true,
  });
  // testInfo.attach('screenshot2', {
  //   body: screenshot2,
  //   contentType: 'image/png',
  // });

  randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot3 = await page.screenshot({
    path: 'playwright-report/screenshot3.png',
    fullPage: true,
  });
  // testInfo.attach('screenshot3', {
  //   body: screenshot3,
  //   contentType: 'image/png',
  // });

  randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot4 = await page.screenshot({
    path: 'playwright-report/screenshot4.png',
    fullPage: true,
  });
  // testInfo.attach('screenshot4', {
  //   body: screenshot4,
  //   contentType: 'image/png',
  // });
}

const stealth = StealthPlugin();
chromium.use(stealth);
chromium.launch({ headless: false }).then(async (browser) => {
  const page1 = await browser.newPage();

  console.log('Testing the stealth plugin..');
  await page1.goto('https://bot.sannysoft.com', { waitUntil: 'networkidle' });
  // await page1.waitForTimeout(10000000);
  await page1.screenshot({ path: 'stealth.png', fullPage: true });

  console.log('All done, check the screenshot. ✨');
  // await simulateUserInteraction(page1);

  await browser.close();
});
