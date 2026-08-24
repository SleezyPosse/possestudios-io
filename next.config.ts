import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The arcade ships as self-contained static pages under public/arcade/.
  // Next serves a public file only at its exact path, so /arcade and
  // /arcade/karate would 404 without these. They are `afterFiles` rewrites
  // (the default for a plain array), which run only after the filesystem
  // check -- so /arcade/karate/index.html still hits the real file.
  async rewrites() {
    return [
      { source: "/arcade", destination: "/arcade/index.html" },
      { source: "/arcade/:cabinet", destination: "/arcade/:cabinet/index.html" },
    ];
  },
};

export default nextConfig;
