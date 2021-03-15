const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy({
        'src/main.css': 'assets/main.css',
        'src/images': 'assets/img',
    });

    return {
        dir: {
            input: 'views',
            output: 'docs'
        }
    }
}