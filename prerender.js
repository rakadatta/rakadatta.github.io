// ============================================================
// PRERENDER — bakes the content from data.js into index.html
// as static HTML (between <!-- prerender:* --> markers) so
// search-engine crawlers see the full page without running JS.
// script.js re-renders the identical markup in the browser.
//
// Run after every edit to data.js:
//   node prerender.js
// ============================================================

const fs = require('fs');
const path = require('path');

// Load data.js + components.js (browser globals) into this scope
const root = __dirname;
const src =
  fs.readFileSync(path.join(root, 'data.js'), 'utf8') + '\n' +
  fs.readFileSync(path.join(root, 'components.js'), 'utf8');
const sandbox = new Function(src + `
  return { DATA, renderHero, renderCvLink, renderPaperList,
           renderInterests, renderTeaching, renderContact, renderAccordion };
`)();

const d = sandbox.DATA;
const blocks = {
  'hero': sandbox.renderHero(d),
  'cv-link': sandbox.renderCvLink(d.cvHref),
  'sections': [
    sandbox.renderAccordion('working-papers',   'Working Papers',     sandbox.renderPaperList(d.workingPapers, 'wp')),
    sandbox.renderAccordion('work-in-progress', 'Work in Progress',   sandbox.renderPaperList(d.workInProgress, 'wip')),
    sandbox.renderAccordion('research',         'Research Interests', sandbox.renderInterests(d.interests)),
    sandbox.renderAccordion('teaching',         'Teaching',           sandbox.renderTeaching(d.teaching)),
    sandbox.renderAccordion('contact',          'Contact & Bio',      sandbox.renderContact(d.contact)),
  ].join(''),
};

// Replace content between markers in index.html
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
for (const [key, content] of Object.entries(blocks)) {
  const re = new RegExp(`(<!-- prerender:${key} -->)[\\s\\S]*?(<!-- /prerender:${key} -->)`);
  if (!re.test(html)) throw new Error(`Marker "prerender:${key}" not found in index.html`);
  html = html.replace(re, `$1${content}$2`);
}
fs.writeFileSync(indexPath, html);
console.log('index.html: static content regenerated');

// Bump sitemap lastmod to today
const sitemapPath = path.join(root, 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
sitemap = sitemap.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(sitemapPath, sitemap);
console.log(`sitemap.xml: lastmod set to ${today}`);
