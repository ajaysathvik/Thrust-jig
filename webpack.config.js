import { resolve } from "path";

export const mode = "development";
export const entry = "./App.js";
export const output = {
  path: resolve(__dirname, "dist"),
  filename: "App.bundle.js",
};
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }
  ],
};
