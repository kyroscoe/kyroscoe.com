import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const pages = ['/', '/services', '/about', '/work', '/contact', '/privacy', '/terms'];
const outputPath = (path) => path === '/' ? 'out/index.html' : join('out', path.slice(1), 'index.html');
const documents = new Map(pages.map((path) => [path, readFileSync(outputPath(path), 'utf8')]));
const root = resolve('out');
for (const [path, html] of documents) {
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, path + ' must have one H1');
  assert.equal((html.match(/<main(?:\s|>)/g) || []).length, 1, path + ' must have one main landmark');
  assert.ok(html.includes('id="main-content"'), path + ' is missing the skip-link target');
  assert.ok(html.includes('og:image'), path + ' is missing social image metadata');
  assert.ok(!/FieldCrate|KyroAI|Computer repair under|corporate runaround|oversized vendor pitch/.test(html), 'Removed copy remains in ' + path);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (!url.startsWith('/') && !url.startsWith('#')) continue;
    const target = new URL(url, 'https://kyroscoe.com' + path);
    const targetPath = target.pathname.replace(/\/$/, '') || '/';
    if (documents.has(targetPath)) {
      if (target.hash) assert.ok(documents.get(targetPath).includes('id="' + decodeURIComponent(target.hash.slice(1)) + '"'), 'Missing anchor: ' + url);
    } else {
      const file = resolve(root, '.' + target.pathname);
      assert.ok(file.startsWith(root) && existsSync(file) && statSync(file).isFile(), 'Broken local asset/link: ' + url);
    }
  }
}
const contact = documents.get('/contact');
for (const field of ['form-name', 'name', 'email', 'business', 'service', 'details', 'bot-field']) assert.ok(contact.includes('name="' + field + '"'), 'Missing form field: ' + field);
assert.ok(contact.includes('data-netlify="true"'), 'Static form is not detectable by Netlify');
assert.ok(contact.includes('data-netlify-honeypot="bot-field"'));
assert.ok(!contact.includes('Your message was submitted'), 'Initial page must not report a successful submission');
assert.ok(documents.get('/about').includes('experience since 2007'));
assert.ok(!documents.get('/about').includes('18+ years leading cybersecurity programs'));
for (const badge of ['cissp', 'cism', 'ccsp', 'crisc', 'cciso', 'ceh', 'sfpc', 'pmp', 'csm', 'cisco-cyberops', 'cisco-ccst-networking']) assert.ok(documents.get('/about').includes('/credentials/' + badge + '.jpg'), 'Missing credential image: ' + badge);
for (const client of ['Buckeye Pads', 'TrueML', 'NELSD']) assert.ok(documents.get('/work').includes(client), 'Missing approved experience: ' + client);
for (const path of ['/', '/services']) {
  assert.ok(documents.get(path).includes('/partners/microsoft-solutions-partner.jpg'));
  assert.ok(documents.get(path).includes('/partners/aws-managed-service-provider.jpg'));
  assert.ok(documents.get(path).includes('/partners/shopify-partner.jpg'));
  assert.ok(documents.get(path).includes('/partners/google-cloud-partner.png'));
}
assert.ok(documents.get('/contact').includes('info@kyroscoe.com'));
assert.ok(documents.get('/contact').includes('937-631-1521'));
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
for (const path of pages) assert.ok(sitemap.includes('https://kyroscoe.com' + path + '</loc>'));
const missing = readFileSync('out/404.html', 'utf8');
assert.ok(missing.includes('noindex, follow'));
assert.ok(missing.includes('Page not found.'));
const walk = (directory) => readdirSync(directory).flatMap((name) => statSync(join(directory, name)).isDirectory() ? walk(join(directory, name)) : [join(directory, name)]);
for (const file of walk('out')) assert.ok(!/\.xlsx$|\.map$|fieldcrate|kyroai|fw9\.pdf$/i.test(file), 'Private, obsolete, or debug file in output: ' + file);
const css = readFileSync('src/index.css', 'utf8');
for (const color of ['#050A0A', '#00E6D0', '#F5F7F7', '#111818', '#8A9999']) assert.ok(css.includes(color));
console.log('Verified 7 prerendered pages, 404, internal links, anchors, assets, form fields, sitemap, brand tokens, and excluded files.');
