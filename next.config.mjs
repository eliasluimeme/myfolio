const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;