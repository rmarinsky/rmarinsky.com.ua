import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {products, pageNames} from './data.js';
const browser = await chromium.launch({headless:true});
const page = await browser.newPage();
const base = process.env.PROTOTYPE_URL || 'http://127.0.0.1:8769';
for(let attempt=0;;attempt++) {
 try {const response=await fetch(base);if(response.ok)break;throw Error('Not ready');}
 catch(error){if(attempt===30)throw error;await new Promise(resolve=>setTimeout(resolve,100));}
}
let checked = 0;
const errors=[];
page.on('pageerror',error=>errors.push(error.message));
try {
 for (const width of [390,1440]) {
  await page.setViewportSize({width,height:1000});
  for (const variant of ['A','B','C']) for (const lang of ['uk','en']) {
   for (const route of [...Object.keys(pageNames[lang]),...products.map(p=>p.id)]) {
    await page.goto(`${base}/?variant=${variant}&page=${route}&lang=${lang}`);
    await page.locator('main h1').waitFor();
    assert.equal(await page.locator('main h1').count(),1,route);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${width}/${variant}/${lang}/${route}: overflow`);
    if(route==='home') {
     assert.equal(await page.locator('.demo-tabs,.tool-index').count(),0,'Home has one featured demo and no repeated chooser');
     assert.equal(await page.locator('video').count(),1);
     assert.equal(await page.locator('.author-note').count(),0);
     assert.equal(await page.locator('.product-shelf h2').textContent(),lang==='uk'?'Для Mac':'For Mac');
     assert.equal(await page.locator('.shelf-detail .release-line,.shelf-detail span').count(),0);
     assert.equal(await page.locator('.hero-evidence .demo-top,.index-preview .demo-top,.cinema-stage .demo-top').count(),0);
    }
    const product=products.find(p=>p.id===route);
    if(product) {
     assert.equal(await page.locator('.product-actions').count(),1,'One installation action group');
     assert.equal(await page.locator('#features h2').textContent(),lang==='uk'?'Можливості':'Capabilities');
     assert.equal(await page.locator('#data h2').textContent(),lang==='uk'?'Дані':'Data');
     assert.equal(await page.locator('#requirements p').first().textContent(),product.boundary[lang]);
     assert.equal(await page.locator('#data p').textContent(),product.privacy[lang]);
     assert.equal(await page.locator('a[href^="#"]').evaluateAll(links=>links.every(a=>document.querySelector(a.getAttribute('href')))),true);
    }
    checked++;
   }
  }
 }
 for (const product of products.filter(p=>p.kind==='mac')) {
  await page.goto(`${base}/?page=${product.id}`);
  await page.locator('video').evaluate(async video=>{await video.play();video.pause();});
  const media=await page.locator('video').evaluate(video=>({duration:video.duration,error:video.error?.code}));
  assert.equal(media.duration,12);
  assert.equal(media.error,undefined);
 }
 assert.deepEqual(errors,[],'No page errors');
 await page.goto(`${base}/?page=discover`);
 await page.locator('#search').fill('DNS');
 assert.equal(await page.locator('.result-row').count(),1);
 await page.locator('#search').fill('no-such-tool');
 await page.locator('[data-reset]').click();
 assert.equal(await page.locator('.result-row').count(),6);
 await page.goto(`${base}/?page=wayforpay-mcp`);
 await page.locator('[data-install]').click();
 assert.match(await page.locator('.config-code').textContent(),/WFP_ENABLE_WRITE_TOOLS[\s\S]*false/);
 console.log(`${checked} responsive page states passed; search/reset and read-only MCP setup passed.`);
} finally {await browser.close();}
