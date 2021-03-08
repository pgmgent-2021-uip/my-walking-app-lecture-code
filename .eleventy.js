module.exports = function (eleventyConfig) {
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