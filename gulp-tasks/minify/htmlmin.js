const htmlmin = require('gulp-htmlmin');
const size = require("gulp-size");

const options = {
  collapseWhitespace : true,
  caseSensitive: true,
  removeComments: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  removeEmptyAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true
};

module.exports.manualRegister = function (gulp, config) {
    gulp.task('compressHTML', function() {
        return gulp.src(`${config.paths.build}/${config.globs.html}`)
            .pipe(size({ title: 'before', showFiles: true }))
            .pipe(htmlmin(options))
            .pipe(size({ title: 'after', showFiles: true }))
            .pipe(gulp.dest(config.paths.build));
    });
};
