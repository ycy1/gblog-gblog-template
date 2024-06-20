import type { NavigationLink, Site, User } from './types.ts'

export const SITE: Site = {
    author: 'Godruoyi',
    url: 'https://godruoyi.com',
    title: 'Gblog',
    description: 'Gblog是一个开源的、简单的、漂亮的博客，用Astro',
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: '文章', url: '/posts' },
    { name: '分类', url: '/categories' },
    { name: '时间线', url: '/timeline' },
    { name: '关于', url: '/posts/gblog' },
    { name: '伙伴', url: '/friends' },
]

export const Friends: User[] = [
    {
        avatar: 'https://tcxx.info/wp-content/themes/StarryW/images/bg/me.jpg',
        social: { twitter: 'Tiancaixinxin', blog: 'https://tcxx.info/', github: 'TCXX' },
        title: '我不是天才，我只是甜菜。',
        name: '甜欣屋',
        description: '技术圈的欧阳娜娜，旅居美国硅谷，生命不息作死不止，探索人生无限可能，女权主义者，希望世界和平',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/6493255?v=4',
        social: { twitter: 'draven0xff', blog: 'https://draveness.me/', github: 'draveness' },
        title: '一个工程师',
        name: 'Draven',
        description: 'Go 语言设计与实现作者，偶像',
    },
    {
        avatar: 'https://pbs.twimg.com/profile_images/1598673328155262977/c_95AZZ8_400x400.jpg',
        social: { twitter: 'brendt_gd', github: 'brendt' },
        title: 'dev adv@phpstorm',
        name: 'Brent Roose',
        description: 'All In PHP & Laravel',
    },
]

export const FooterLinks = [
    {
        section: 'Blog',
        links: [
            { name: '文章', url: '/posts' },
            { name: '时间线', url: '/timeline' },
            { name: '分类', url: '/categories' },
            { name: '关于', url: '/posts/about-godruoyi' },
        ],
    },
    {
        section: 'Other',
        links: [
            { name: 'RSS源', url: '/rss.xml' },
            { name: 'Site Map', url: '/sitemap-index.xml' },
            { name: 'GitHub', url: 'https://github.com/ycy1' },
        ],
    },
]

export const GoogleAnalytics = {
    enable: true,
    id: 'G-TKQ4L3ZDSF',
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
