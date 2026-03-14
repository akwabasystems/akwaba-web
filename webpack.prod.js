const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
    mode: "production",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].js",
        chunkFilename: "js/[name].[contenthash].chunk.js",
        publicPath: "/"
    },

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
            },
        ],
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                styles: {
                    name: "styles",
                    type: "css/mini-extract",
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].chunk.css"
        }),

        /** 
         * Set the `basename` environment variable for the production build, which is used by React Router to determine the base URL for routing.
         * This is important for ensuring that client-side routing works correctly in production, especially when the app is served from a top-level path
         * such as `https://akwaba.systems/`.
         */
        new webpack.DefinePlugin({
            "process.env.ROUTER_BASENAME": JSON.stringify("/")
        })
    ],

    performance: {
        hints: "warning",
        maxEntrypointSize: 300000,
        maxAssetSize: 300000
    }

});
