import { defineConfig } from 'astro/config'
// import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import { SITE } from './src/config.ts'
import { remarkReadingTime } from './src/support/time.ts'
import remarkToc from 'remark-toc'

export default defineConfig({
    // output: 'server',
    output: 'static',
    // adapter: netlify(),
    site: SITE.url,
    image: {},
    prefetch: {
        prefetchAll: true, // 预获取所有链接
        defaultStrategy: 'viewport' // 当链接进入视口时预获取
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        react(),
        partytown(),
        (await import('@playform/compress')).default({
            CSS: true,
            HTML: true,
            Image: false, // too slow when deploy to production,
            JavaScript: true,
            SVG: true,
            Logger: 2,
        }),
    ],
    markdown: {
        remarkPlugins: [ [remarkToc, { ordered: true, tight: true ,maxDepth : 2 ,heading: "目录" }],remarkReadingTime ],
        shikiConfig: {
            themes: {
                light: 'dark-plus',
                dark: 'solarized-light',
            },
            langs: ['javascript', 'typescript', 'html', 'css', 'json', 'md', 'mdx', 'yaml', 'shell', 'bash', 'python', 'java'],
            wrap: false,
        },
    },
    server: {                
        host: '0.0.0.0'   
    },
    // experimental: {
    //     clientPrerender: true,
    //     directRenderScript: true,
    // },
})
