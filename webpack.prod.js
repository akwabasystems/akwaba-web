const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = merge(common, {
    mode: "production",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        publicPath: ""
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

    plugins: [
        new MiniCssExtractPlugin(),

        /** 
         * Set the `basename` environment variable for the production build, which is used by React Router to determine the base URL for routing.
         * This is important for ensuring that client-side routing works correctly in production, especially when the app is served from a top-level path
         * such as `https://akwaba.systems/`.
         */
        new webpack.DefinePlugin({
            "process.env.ROUTER_BASENAME": JSON.stringify("")
        })

    ],

});
