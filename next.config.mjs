/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
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
