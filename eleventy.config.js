module.exports = function (conf) {
  conf.addPassthroughCopy('./src/styles');
  conf.addPassthroughCopy('./src/images');

  return {
    dir: {
      input: './src',
    },
    htmlTemplateEngine: false,
  };
};
