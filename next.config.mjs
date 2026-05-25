/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — produces an `out/` folder of plain HTML/JS, suitable for any static host.
  output: 'export',
  // Many static hosts prefer directory-style URLs (/about/ over /about.html).
  trailingSlash: true,
  images: {
    // next/image's loader server isn't available on static hosts.
    unoptimized: true,
  },
};

export default nextConfig;
