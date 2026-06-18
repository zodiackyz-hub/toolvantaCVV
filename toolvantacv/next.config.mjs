/** @type {import('next').NextConfig} */
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  ...(githubPagesBasePath
    ? {
        basePath: githubPagesBasePath,
        assetPrefix: `${githubPagesBasePath}/`
      }
    : {}),
  images: {
    unoptimized: true
  }
};

export default nextConfig;
