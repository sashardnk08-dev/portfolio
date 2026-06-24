module.exports = function (conf) {
  conf.addPassthroughCopy('./src/style.css');
  conf.addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: './src',
      includes: './includes'
    },
    htmlTemplateEngine: 'njk'
  }
}
