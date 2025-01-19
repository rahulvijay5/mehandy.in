import { writeFile } from 'fs/promises';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');
  const pages = await globby([
    'app/**/*.tsx',
    '!app/**/*.test.tsx',
    '!app/**/components/**',
    '!app/api/**',
    '!app/admin/**',
  ]);

  const baseUrl = 'https://mehandy.in';

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('app', '')
            .replace('/page.tsx', '')
            .replace('/layout.tsx', '')
            .replace('/not-found.tsx', '404');

          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${route === '' ? '1.0' : '0.7'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  await writeFile('public/sitemap.xml', formatted);
}

generate(); 