import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
try {
  const { render, pageMetadata, getPageSEO, businessSchema, siteUrl } = await server.ssrLoadModule('/src/entry-server.tsx');
  const template = (await readFile('out/index.html', 'utf8')).replace(/\r\n?/g, '\n');
  for (const pathname of [...Object.keys(pageMetadata), '/404']) {
    const seo = getPageSEO(pathname);
    const metadata = [
      `<title>${escape(seo.title)}</title>`,
      `<meta name="description" content="${escape(seo.description)}" />`,
      `<meta name="robots" content="${seo.noindex ? 'noindex, follow' : 'index, follow'}" />`,
      `<link rel="canonical" href="${escape(seo.url)}" />`,
      '<meta property="og:type" content="website" />',
      '<meta property="og:site_name" content="Kyroscoe" />',
      ...Object.entries({ title: seo.title, description: seo.description, url: seo.url, image: seo.image }).map(([key, value]) => `<meta property="og:${key}" content="${escape(value)}" />`),
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />',
      '<meta property="og:image:alt" content="Kyroscoe — IT support and cybersecurity" />',
      '<meta name="twitter:card" content="summary_large_image" />',
      ...Object.entries({ title: seo.title, description: seo.description, image: seo.image }).map(([key, value]) => `<meta name="twitter:${key}" content="${escape(value)}" />`),
      `<script id="business-schema" type="application/ld+json">${JSON.stringify(businessSchema).replaceAll('<', '\\u003c')}</script>`,
    ].join('\n    ');
    const html = template
      .replace(/<!--page-meta-start-->[\s\S]*?<!--page-meta-end-->/, metadata)
      .replace('<div id="root"></div>', `<div id="root">${render(pathname)}</div>`);
    const output = pathname === '/' ? 'out/index.html' : pathname === '/404' ? 'out/404.html' : join('out', pathname.slice(1), 'index.html');
    await mkdir(join(output, '..'), { recursive: true });
    await writeFile(output, html);
    console.log('Prerendered ' + pathname);
  }
  const urls = Object.keys(pageMetadata).map((path) => `  <url><loc>${escape(siteUrl + (path === '/' ? '/' : path))}</loc></url>`).join('\n');
  await writeFile('out/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  await writeFile('out/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
} finally {
  await server.close();
}
