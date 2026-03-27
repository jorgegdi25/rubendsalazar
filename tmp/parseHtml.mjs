import fs from 'fs';
import * as cheerio from 'cheerio';

const html = fs.readFileSync('tmp/lehigh.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- HEADINGS ---');
$('h1, h2, h3').each((i, el) => {
  const t = $(el).text().trim().replace(/\s+/g, ' ');
  if (t) console.log(el.tagName + ': ' + t);
});

console.log('--- PARAGRAPHS ---');
$('.elementor-widget-text-editor').each((i, el) => {
  const t = $(el).text().trim().replace(/\s+/g, ' ');
  if (t) console.log('p: ' + t);
});

console.log('--- IMGS ---');
const imgs = new Set();
$('img').each((i, el) => {
  const src = $(el).attr('src');
  if (src && !src.includes('data:') && !src.includes('logo')) {
    imgs.add(src);
  }
});

// filter and print unique
[...imgs]
  .filter(src => src.endsWith('.jpg') || src.endsWith('.webp') || src.endsWith('.png'))
  .forEach(src => console.log('IMG: ' + src));
