const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 9000;


module.exports = merge(common, {
    mode: "development",

    output: {
        publicPath: "/"
    },

    devtool: "eval-source-map",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                quietDeps: true,
                                silenceDeprecations: ["import"],
                            }
                        }
                    },
                ],
                include: path.resolve(__dirname, "src"),
            }
        ],
    },

    /** The Webpack Dev Server options */
    devServer: {

        /** 
         * Enables history API fallback so that HTML5 History API-based routing works 
         * Critical for `/platform/kawaii` refresh
        */
        historyApiFallback: true,

        /** Enables Webpack's Hot Module Replacement, which automatically refreshes the page on file change */
        hot: true,

        /** Specifies the host to use for the Dev server */
        host: HOST,

        /** The port on which to listen for requests */
        port: PORT,

    },

    /** 
     * Set the `basename` environment variable for the development build, which is used by React Router to determine the base URL for routing.
     * This is important for ensuring that client-side routing works correctly in development, especially when the app is served from a subdirectory.
     * 
     * For instance, if you want to serve the app from `http://localhost:9000/akwaba-v5`, you would set `ROUTER_BASENAME=/akwaba-v5` in your development environment.
     */
    plugins: [
        new webpack.DefinePlugin({
            "process.env.ROUTER_BASENAME": JSON.stringify("/")
        })
    ]

});
