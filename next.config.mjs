/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/influencers',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
