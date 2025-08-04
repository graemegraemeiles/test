import { Page, test, TestInfo } from '@playwright/test';

const randomWait = () => Math.floor(Math.random() * 30) * 1000;

async function randomMouseMove(page: Page) {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  await page.mouse.move(x, y);
  await page.mouse.wheel(0, y);
}

// async function scenario1(page: Page, testInfo: TestInfo) {
//   console.log('Running scenario 1');
//   await randomMouseMove(page);
//   await page.waitForTimeout(randomWait());
//   await randomMouseMove(page);

//   if (Math.random() < 0.2) {
//     try {
//       console.log('Clicking next-btn');
//       await randomMouseMove(page);
//       await page.locator('[data-test-id="next-btn"]').click();
//       await randomMouseMove(page);
//     } catch (e) {
//       console.error('Failed to click next-btn:', e);
//     }
//   }
//   await randomMouseMove(page);
//   await page.waitForTimeout(randomWait());
//   await randomMouseMove(page);
// }

async function scenario2(page: Page, testInfo: TestInfo) {
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
      'horizontal-ad-4',
    ];
    const randomAd = ads[Math.floor(Math.random() * ads.length)];
    try {
      await randomMouseMove(page);
      console.log(`Clicking vertical-ad: ${randomAd}`);
      await randomMouseMove(page);

      await page.locator(`[id="${randomAd}"]`).first().scrollIntoViewIfNeeded();
      await page.locator(`[id="${randomAd}"]`).first().hover();
      await page.locator(`[id="${randomAd}"]`).first().click();
    } catch (e) {
      console.error(`Failed to click ${randomAd}:`, e);
    }
  }
  await randomMouseMove(page);
  await page.waitForTimeout(randomWait());
  await randomMouseMove(page);
}

async function scenario3(page: Page, testInfo: TestInfo) {
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

  const videos = ['video-card-2', 'video-card-6', 'video-card-8', 'video-card-10'];
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
      'video-ad-7',
      'video-ad-8',
      'video-ad-9',
      'video-ad-10',
    ];
    const randomVideoAd = videoAds[Math.floor(Math.random() * videoAds.length)];
    try {
      await randomMouseMove(page);
      await randomMouseMove(page);

      console.log(`Clicking video-ad: ${randomVideoAd}`);
      await page.locator(`[id="${randomVideoAd}"]`).first().scrollIntoViewIfNeeded();
      await page.locator(`[id="${randomVideoAd}"]`).first().hover();
      await page.locator(`[id="${randomVideoAd}"]`).first().click();

      await randomMouseMove(page);
    } catch (e) {
      console.error(`Failed to click ${randomVideoAd}:`, e);
    }
    await randomMouseMove(page);
    await page.waitForTimeout(randomWait());
    await randomMouseMove(page);
  }
}

async function simulateUserInteraction(page: Page, testInfo: TestInfo) {
  const baseUrl = 'https://freehqpornxxx.com/';
  const scenarios = [scenario2, scenario3];
  let randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page, testInfo);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot1 = await page.screenshot({
    path: 'playwright-report/screenshot1.png',
    fullPage: true,
  });
  testInfo.attach('screenshot1', {
    body: screenshot1,
    contentType: 'image/png',
  });

  randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page, testInfo);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot2 = await page.screenshot({
    path: 'playwright-report/screenshot2.png',
    fullPage: true,
  });
  testInfo.attach('screenshot2', {
    body: screenshot2,
    contentType: 'image/png',
  });

  randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page, testInfo);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot3 = await page.screenshot({
    path: 'playwright-report/screenshot3.png',
    fullPage: true,
  });
  testInfo.attach('screenshot3', {
    body: screenshot3,
    contentType: 'image/png',
  });

  randomIndex = Math.floor(Math.random() * scenarios.length);
  await page.goto(baseUrl);
  await scenarios[randomIndex](page, testInfo);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  await randomMouseMove(page);
  const screenshot4 = await page.screenshot({
    path: 'playwright-report/screenshot4.png',
    fullPage: true,
  });
  testInfo.attach('screenshot4', {
    body: screenshot4,
    contentType: 'image/png',
  });
}

test('simulate user interaction 1', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 2', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 3', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 4', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 5', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 6', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 7', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 8', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 9', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 10', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 11', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 12', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 13', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 14', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 15', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 16', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 17', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 18', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 19', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 20', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 21', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 22', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 23', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 24', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 25', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 26', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 27', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 28', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 29', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 30', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 31', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 32', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 33', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 34', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 35', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 36', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 37', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 38', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 39', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});

test('simulate user interaction 40', async ({ page }, testInfo) => {
  await simulateUserInteraction(page, testInfo);
});
// test.skip('capture browser detection screenshots', async ({ page }, testInfo) => {
//   await page.goto('https://www.whatismybrowser.com/');
//   const browserHome = await page.screenshot({
//     path: 'playwright-report/browser-home.png',
//     fullPage: true,
//   });
//   testInfo.attach('browserHome', {
//     body: browserHome,
//     contentType: 'image/png',
//   });

//   await page.goto('https://www.whatismybrowser.com/detect/how-big-is-my-computer-screen/');
//   const screenSize = await page.screenshot({
//     path: 'playwright-report/screen-size.png',
//     fullPage: true,
//   });
//   testInfo.attach('screenSize', {
//     body: screenSize,
//     contentType: 'image/png',
//   });

//   await page.goto('https://www.whatismybrowser.com/detect/what-is-my-user-agent/');
//   const userAgent = await page.screenshot({
//     path: 'playwright-report/user-agent.png',
//     fullPage: true,
//   });
//   testInfo.attach('userAgent', {
//     body: userAgent,
//     contentType: 'image/png',
//   });

//   await page.goto('https://www.whatismybrowser.com/detect/client-hints/');
//   const clientHints = await page.screenshot({
//     path: 'playwright-report/client-hints.png',
//     fullPage: true,
//   });
//   testInfo.attach('clientHints', {
//     body: clientHints,
//     contentType: 'image/png',
//   });

//   await page.goto('https://www.whatismybrowser.com/detect/navigator-platform/');
//   const navigatorPlatform = await page.screenshot({
//     path: 'playwright-report/navigator-platform.png',
//     fullPage: true,
//   });
//   testInfo.attach('navigatorPlatform', {
//     body: navigatorPlatform,
//     contentType: 'image/png',
//   });
// });
