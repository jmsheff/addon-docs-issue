const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    typescript: {
        reactDocgen: 'react-docgen-typescript'
    },
    addons: ['@storybook/addon-docs', 'storybook-addon-react-docgen'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    }
                }, "sass-loader"],
            include: path.resolve(__dirname, "../")
        });
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("react-docgen-typescript-loader"),
                    options: {
                      // Provide the path to your tsconfig.json so that your stories can
                      // display types from outside each individual story.
                      tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
                    },
                  },
            ]
        });
        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    }
};