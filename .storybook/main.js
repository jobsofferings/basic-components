// 这是storybook的配置文件，loader、entry file等都会在此进行配置
const path = require("path");

module.exports = {
  // storybook文档的目标文件
  stories: ["../packages/**/*.stories.(tsx|mdx)"],
  // 插件依赖，后面我们会使用
  addons: ['@storybook/addon-knobs', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};
