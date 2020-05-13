const isProd = process.env.NODE_ENV === 'production';

const config = {
    lintOnSave: false,
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Negotiation App',
        },
    },
    configureWebpack: {},
};

if (isProd) {
    //set to true in order to analyze bundle size
    const useAnalyzer = false;
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
        .BundleAnalyzerPlugin;

    config.configureWebpack =
        {
            ...config.configureWebpack,
            ...{
                plugins: [
                    new BundleAnalyzerPlugin(
                        {
                            analyzerMode: useAnalyzer ? 'static' : 'disabled',
                            openAnalyzer: useAnalyzer,
                            generateStatsFile: useAnalyzer,
                        },
                    )],
                performance: {
                    hints: useAnalyzer,
                    maxEntrypointSize: 512000,
                    maxAssetSize: 512000,
                },
            },
        };
}

module.exports = config;
