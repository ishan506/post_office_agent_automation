// const puppeteer = require('puppeteer');

// async function run() {
//    const browser = await puppeteer.launch({
//   executablePath:
//     "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
//   headless: false
// });

//     const page = await browser.newPage();

//     await page.goto('https://dopagent.indiapost.gov.in/', {
//         waitUntil: 'networkidle2'
//     });

//     // Fill username
//     await page.type(
//   '#AuthenticationFG\\.USER_PRINCIPAL',
//   'DOP.MI1250010300012'
// );

// await page.type(
//   '#AuthenticationFG\\.ACCESS_CODE',
//   'Gulshan@123'
// );
//     // await browser.close();
// }

// run().catch(console.error);


const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://dopagent.indiapost.gov.in/', {
    waitUntil: 'networkidle2'
  });

     // Fill username
    await page.type(
  '#AuthenticationFG\\.USER_PRINCIPAL',
  'DOP.MI1250010300012'
);

 await page.type(
  '#AuthenticationFG\\.ACCESS_CODE',
  'Gulshan@123'
);

  // Wait for captcha image
  await page.waitForSelector('#IMAGECAPTCHA');

  // Save captcha image screenshot
  const captcha = await page.$('#IMAGECAPTCHA');
  await captcha.screenshot({
    path: 'captcha.png'
  });

  console.log('Captcha saved as captcha.png');

  // Pause so you can read the captcha manually
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter captcha: ', async (captchaText) => {
    await page.type(
      '#AuthenticationFG\\.VERIFICATION_CODE',
      captchaText
    );

    console.log('Captcha entered.');

    rl.close();

    await page.waitForSelector(
  '#VALIDATE_RM_PLUS_CREDENTIALS_CATCHA_DISABLED'
);

await page.click(
  '#VALIDATE_RM_PLUS_CREDENTIALS_CATCHA_DISABLED'
);


await page.waitForSelector('#Accounts');
await page.click('#Accounts');


await page.waitForSelector('text=Agent Enquire & Update Screen', {
  visible: true,
  timeout: 30000
});

await page.click('text=Agent Enquire & Update Screen');



await page.waitForSelector('#CustomAgentRDAccountFG\\.PAY_MODE_SELECTED_FOR_TRN');
await page.click('#CustomAgentRDAccountFG\\.PAY_MODE_SELECTED_FOR_TRN');



let accounts=[{
  "name":"MANISH",
  "amount":"1,500.00 Cr."
}]



  });
}

run().catch(console.error);