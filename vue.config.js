module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            // entry for the page
            entry: "src/main.ts",
            // the source template
            template: "public/index.html",
            // output as dist/index.html
            filename: "index.html",
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Negotiation App",
        },
    },
};
