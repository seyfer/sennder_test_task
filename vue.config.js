const isProd = process.env.NODE_ENV === 'production';
//set to true in order to analyze bundle size
const useAnalyzer = false;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;


module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.ts',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Negotiation App',
        },
    },
    configureWebpack: {
        plugins: [new BundleAnalyzerPlugin(
            {
                analyzerMode: useAnalyzer ? 'static' : 'disabled',
                openAnalyzer: useAnalyzer,
                generateStatsFile: isProd,
            },
        )],
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 350000,
            },
        },
        performance: {
            hints: useAnalyzer,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
    },
};
