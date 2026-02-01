const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 9000;


module.exports = merge(common, {
    mode: "development",

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

});
