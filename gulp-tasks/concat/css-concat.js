/**
 * Created by stephanoapiolaza on 11-02-2018.
 * @version 0.16.0 - 11 Feb 2018
 * @since   0.15.5 - 11 Feb 2018
 */
const concat = require('gulp-concat');
const size = require('gulp-size');

/**
 * Let to build a file with multiple css files
 * @param gulp singleton
 * @param config from gulpfile.js
 */
module.exports.manualRegister = function (gulp, config) {
  gulp.task('concatCSS', function () {
    return gulp.src(config.package.css.include)
      .pipe(concat(`${config.package.css.name}`))
      .pipe(gulp.dest(`${config.paths.buildCss}`));
  });
};
