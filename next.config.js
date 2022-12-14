const path = require("path");

const NEXT_PUBLIC_SANITY_PROJECT_ID = "rv6r4a6q"; // Set the new project ID from sanity
const NEXT_PUBLIC_SANITY_DATASET = "production";

module.exports = {
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "",
    NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack"),
    });
    config.module.rules.push({
      test: /\.(png|jpg|gif|eot|ttf|woff|woff2|srt)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    config.resolve.alias["~"] = path.resolve(__dirname);
    return config;
  },
};
