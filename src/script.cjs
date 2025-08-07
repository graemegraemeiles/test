const { chromium } = require('playwright-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

async function randomWait(page) {
  const t = (15 + Math.floor(Math.random() * 30)) * 1000;
  console.log(`Random wait for ${t / 1000} seconds `);
  await page.waitForTimeout(t);
}

async function randomMouseMove(page) {
  console.log('Perform random mouse move');
  const x = Math.floor(Math.random() * 700);
  const y = Math.floor(Math.random() * 700);
  const sy = Math.floor(Math.random() * 700);

  await page.mouse.move(x, y);
  await page.mouse.wheel(0, sy);
}

async function randomClick(page) {
  console.log('Perform random click');

  const x = Math.floor(Math.random() * 700);
  const y = Math.floor(Math.random() * 700);
  try {
    await page.mouse.click(x, y);
  } catch (e) {
    console.error('Failed to click on new page:', e);
  }
}

async function scenario2(page) {
  console.log('Running scenario 2');
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomWait(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
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
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomWait(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);

  if (true || Math.random() < 0.8) {
    const ads = [
      // 'vertical-ad-1',
      // 'vertical-ad-2',
      // 'vertical-ad-3',
      // 'vertical-ad-4',
      // 'horizontal-ad-3',
      'horizontal-ad-4',
      // 'horizontal-ad-2',
      // 'horizontal-ad-1',
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
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomWait(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
}

async function scenario3(page) {
  console.log('Running scenario 3');
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomWait(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
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
    await randomMouseMove(page);
    await randomMouseMove(page);
    await randomMouseMove(page);
    await randomWait(page);
    await randomMouseMove(page);
    await randomMouseMove(page);
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
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomWait(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);

  if (true || Math.random() < 0.8) {
    const videoAds = [
      // 'video-ad-1',
      // 'video-ad-2',
      // 'video-ad-3',
      // 'video-ad-4',
      // 'video-ad-5',
      // 'video-ad-6',
      'video-ad-7',
      // 'video-ad-8',
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
    await randomMouseMove(page);
    await randomMouseMove(page);

    await randomWait(page);
    await randomMouseMove(page);
    await randomMouseMove(page);
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
    path: 'screenshots/screenshot1.png',
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
    path: 'screenshots/screenshot2.png',
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
    path: 'screenshots/screenshot3.png',
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
    path: 'screenshots/screenshot4.png',
    fullPage: true,
  });
  // testInfo.attach('screenshot4', {
  //   body: screenshot4,
  //   contentType: 'image/png',
  // });
}

async function simualteOnAdPage(page) {
  console.log('New page opened! Performing random mouse moves and clicks.');
  // Perform a few random mouse moves and clicks
  for (let i = 0; i < 3; i++) {
    await randomMouseMove(page);
    // Randomly click somewhere on the page
    await randomMouseMove(page);
    await randomClick(page);

    await randomMouseMove(page);
    await randomClick(page);

    await randomMouseMove(page);
    await randomClick(page);
    await randomWait(page);
    await randomMouseMove(page);
    await randomClick(page);

    await randomMouseMove(page);
    await randomClick(page);
  }
}

async function job() {
  const stealth = StealthPlugin();
  chromium.use(stealth);
  chromium.launch({ headless: false }).then(async (browser) => {
    // Listen for new pages (tabs) being opened
    let ALL_ACTIONS = [];
    ALL_ACTIONS.push(1);

    const page1 = await browser.newPage();

    const contexts = browser.contexts();
    for (let i = 0; i < contexts.length; i++) {
      console.log('Adding listners to context');

      let context = contexts[i];
      context.on('page', async (page) => {
        ALL_ACTIONS.push(1);
        await simualteOnAdPage(page);
        ALL_ACTIONS.pop(1);
        if (ALL_ACTIONS.length === 0) {
          console.log('Closing browser page');

          await browser.close();
        }
      });
      context.on('popup', async (page) => {
        ALL_ACTIONS.push(1);
        await simualteOnAdPage(page);
        ALL_ACTIONS.pop(1);
        if (ALL_ACTIONS.length === 0) {
          console.log('Closing browser popup');

          await browser.close();
        }
      });
    }

    // console.log('Testing the stealth plugin..');
    // await page1.goto('https://bot.sannysoft.com', { waitUntil: 'networkidle' });
    // // await page1.waitForTimeout(10000000);
    // await page1.screenshot({ path: 'stealth.png', fullPage: true });

    // console.log('All done, check the screenshot. ✨');
    await simulateUserInteraction(page1);
    ALL_ACTIONS.pop(1);
    if (ALL_ACTIONS.length === 0) {
      console.log('Closing browser main');
      await browser.close();
    }

    // await browser.close();
  });
}

try {
  job();
  job();
  job();
  job();
  job();
  job();
  job();
  job();
  job();
  job();
} catch (e) {
  console.error(e);
}

// chromium.launch({ headless: false }).then(async (browser) => {
//   // Listen for new pages (tabs) being opened
//   browser.on('page', async (page) => {
//     console.log('New page opened! Performing random mouse moves and clicks.');
//     // Perform a few random mouse moves and clicks
//     for (let i = 0; i < 3; i++) {
//       await randomMouseMove(page);
//       // Randomly click somewhere on the page
//       const x = Math.floor(Math.random() * 500);
//       const y = Math.floor(Math.random() * 500);
//       try {
//         await page.mouse.click(x, y);
//       } catch (e) {
//         console.error('Failed to click on new page:', e);
//       }
//       await page.waitForTimeout(500 + Math.random() * 1000);
//     }
//   });
//   const page1 = await browser.newPage();

//   browser.addListener();

//   // console.log('Testing the stealth plugin..');
//   // await page1.goto('https://bot.sannysoft.com', { waitUntil: 'networkidle' });
//   // // await page1.waitForTimeout(10000000);
//   // await page1.screenshot({ path: 'stealth.png', fullPage: true });

//   // console.log('All done, check the screenshot. ✨');
//   await simulateUserInteraction(page1);

//   await browser.close();
// });
