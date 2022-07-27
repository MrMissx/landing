// Sitemap xml builder
// Change this to your site url
/** @type {import('next-sitemap').IConfig} */

const siteUrl = "https://mrmiss.my.id";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    sitemapSize: 7000,
    exclude: [ "/admin/**" ]
};
