const path = require("path");
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src");

    config.module.rules.push({
      test: /\.(png)$/i,
      use: [{ loader: "url-loader" }],
    });

    return config;
  },
});
