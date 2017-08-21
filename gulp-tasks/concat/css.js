/**
 * Created by stephanoapiolaza on 15-08-2017.
 */
const concat = require('gulp-concat');
const size = require('gulp-size');

module.exports.manualRegister = function (gulp, config) {
  gulp.task('concatCSS', function () {
    return gulp.src(`${config.package.css.include}`)
      .pipe(concat(`${config.package.css.name}`))
      .pipe(gulp.dest(`${config.paths.buildCss}`));
  });
};
