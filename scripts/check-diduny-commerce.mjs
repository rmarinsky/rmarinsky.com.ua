import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

for (const prefix of ['', 'en/']) {
  const legal = await readFile(new URL(`../dist/${prefix}legal/index.html`, import.meta.url), 'utf8');
  const product = await readFile(new URL(`../dist/${prefix}diduny/index.html`, import.meta.url), 'utf8');
  assert.match(product, /₴119/, 'Cloud price must be visible');
  assert.match(legal, prefix ? /Cloud: ₴119 per month/ : /Cloud: ₴119 на місяць/, 'Cloud quota and recurring price must be public');
  assert.match(product, /data-product="cloud"/, 'Cloud must be selectable');
  assert.match(legal, prefix ? /Support: ₴69 per month/ : /Підтримка: ₴69 на місяць/, 'Support terms and price must be explicit');
  assert.match(product, /data-local-cloud-comparison/, 'local and cloud comparison must be available');
  assert.match(product, /data-plan-comparison/, 'all plan allowances must be comparable');
  assert.match(product, /data-open-diduny/, 'review must preserve the plan when opening the app');
  assert.match(product, /data-diduny-paywall/, 'product must include the staged subscription flow');
  assert.match(product, prefix ? /Suggest and discuss new features/ : /Пропозиції й обговорення нових функцій/, 'paid community benefits must be stated');
  assert.match(legal, prefix ? /One-time annual access: ₴1500/ : /Разовий річний доступ: ₴1500/, `${prefix}one-time access must be explicit`);
  assert.match(legal, prefix ? /does not renew automatically/ : /не поновлюється автоматично/, `${prefix}one-time access must not renew`);
  assert.match(legal, prefix ? /up to 3 payments/ : /до 3 платежів/, `${prefix}installment limit must be explicit`);
  assert.match(legal, prefix ? /Account → Privacy → Share usage statistics/ : /Обліковий запис → Приватність → Надсилати статистику використання/, 'privacy instructions must match the localized app labels');
  assert.match(legal, prefix ? /off by default on Free and Pro/ : /вимкнено за замовчуванням для Free і Pro/, 'analytics must be opt-in on all plans');
  assert.match(legal, prefix ? /does not enable statistics/ : /не вмикає статистику/, 'payment must not imply analytics consent');
  assert.match(legal, /₴1500/, `${prefix}annual price must be explicit`);
  assert.match(legal, prefix ? /Monthly Pro: ₴150 for one month/ : /Місячний Pro: ₴150 за один місяць/, `${prefix}monthly price must be explicit`);
  assert.match(legal, /id="refunds"/, `${prefix}refund procedure must have an anchor`);
  assert.match(legal, /roman@rmarinsky\.com\.ua/, `${prefix}support contact must be public`);
  assert.match(legal, /WayForPay/, `${prefix}payment provider must be named`);
  assert.doesNotMatch(legal, /₴249|₴699|\[внести локально\]|\[enter locally\]/, `${prefix}no superseded prices or publication placeholders`);
  assert.match(legal, /id="diduny-privacy"/, `${prefix}Diduny account, cloud and billing privacy must be explained`);
  assert.match(product, prefix ? /₴150 monthly/ : /₴150 щомісяця/, `${prefix}product monthly price must agree`);
  assert.match(product, /₴1500/, `${prefix}product and legal prices must agree`);
  assert.match(product, /legal\/#diduny-offer/, `${prefix}offer must be linked from pricing`);
  assert.match(legal, prefix ? /every year|yearly/ : /щороку|щорічно/, `${prefix}annual auto-renewal must be explicit`);
  assert.match(legal, prefix ? /two free cloud hours|2 free cloud hours/ : /2 години хмар/, `${prefix}free cloud allowance must be explicit`);
}
console.log('Diduny commerce: Ukrainian and English built pages agree on prices, terms, refunds, and contact.');

const styles = await readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8');
assert.match(styles, /\.legal-section\s*\{[^}]*scroll-margin-top:\s*112px/s, 'legal anchors must clear the sticky navigation');
