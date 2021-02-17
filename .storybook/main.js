/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-16 21:12:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-17 18:53:12
 */
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.tsx?$/,
  //     use: [
  //       {
  //         loader: require.resolve("babel-loader"),
  //         options: {
  //           presets: [require.resolve("babel-preset-react-app")]
  //         }
  //       }, 
  //       {
  //         loader: require.resolve("react-docgen-typescript-loader"),
  //         options: {
  //           shouldExtractLiteralValuesFromEnum: true,
  //           propFilter: (prop) => {
  //             if (prop.parent) {
  //               return !prop.parent.fileName.includes('node_modules')
  //             }
  //             return true            
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   config.resolve.extensions.push(".ts", ".tsx");
  //   return config;
  // },
}