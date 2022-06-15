const config = {
  siteUrl: 'https://andresdamelio.tech/',
  generateRobotsTxt: true,
  changefreq: 'daily',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        Disallow: '',
        Sitemap: 'https://andresdamelio.tech/sitemap.xml',
      },
    ],
  },
};

module.exports = config;
