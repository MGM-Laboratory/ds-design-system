import createMDX from '@next/mdx';

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  transpilePackages: [
    '@labmgm/brand',
    '@labmgm/fonts',
    '@labmgm/icons',
    '@labmgm/layout',
    '@labmgm/patterns',
    '@labmgm/react',
    '@labmgm/theme',
    '@labmgm/tokens',
  ],
};

export default withMDX(nextConfig);
