/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@labmgm/brand',
    '@labmgm/calendar',
    '@labmgm/charts',
    '@labmgm/command',
    '@labmgm/data-table',
    '@labmgm/fonts',
    '@labmgm/forms',
    '@labmgm/hooks',
    '@labmgm/icons',
    '@labmgm/layout',
    '@labmgm/motion',
    '@labmgm/patterns',
    '@labmgm/react',
    '@labmgm/rich-text',
    '@labmgm/theme',
    '@labmgm/toast',
    '@labmgm/tokens',
  ],
};

export default nextConfig;
