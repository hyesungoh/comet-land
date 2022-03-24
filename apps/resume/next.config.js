const withTM = require('next-transpile-modules')(['core']);
const CompressionPlugin = require('compression-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(
  {
    webpack(config) {
      const plugins = [...config.plugins, new CompressionPlugin()];
      return { ...config, plugins };
    },
  },
  nextConfig
);
