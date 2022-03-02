const mdx = async (filename) => {
  const [rehypeHighlight, remarkToc] = await Promise.all([
    import("rehype-highlight").then((mod) => mod.default),
    import("remark-toc").then((mod) => mod.default),
  ]);

  return {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeHighlight],
  };
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "netlify/functions/server/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002
  mdx,
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/*", "routes/nested.tsx");
    });
  },
};
