/** @type {import('next').NextConfig} */
// basePath is injected at build time so we can keep the local dev server clean
// (no /Landing-Page prefix) and still ship to https://<org>.github.io/Landing-Page/.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  // Static export — produces an `out/` folder of plain HTML/JS, suitable for GitHub Pages.
  output: 'export',
  // Pages serves from /Landing-Page/ on org-owned project sites.
  basePath,
  assetPrefix: basePath || undefined,
  // GitHub Pages dislikes hashed-bucket trailing requests; trailingSlash sidesteps that.
  trailingSlash: true,
  images: {
    // next/image's loader server isn't available on static hosts.
    unoptimized: true,
  },
};

export default nextConfig;
