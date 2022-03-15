const minify = require("minify-html-literals");
module.exports = function (source) {
  try {
    const minified = minify.minifyHTMLLiterals(source);

    if (minified && minified.code) {
      return minified.code;
    }

    return source;
  } catch (e) {
    return source;
  }
};
