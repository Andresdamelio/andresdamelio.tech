/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sobre-mi',
        permanent: true,
      },
    ];
  },
};
