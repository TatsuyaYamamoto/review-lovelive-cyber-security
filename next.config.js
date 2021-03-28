const path = require("path");
const urlLoader = require("url-loader");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src");

    config.module.rules.push({
      test: /\.(png)$/i,
      use: [{ loader: "url-loader" }],
    });

    return config;
  },
};
