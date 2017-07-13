/**
 * Created by stephanoapiolaza on 13/07/2017.
 */
// This will keeps pipes working after error event
const plumber = require('gulp-plumber');

// linting
const sassLint = require('gulp-sass-lint');

// Used in linting custom reporter
const notify = require('gulp-notify');

module.exports.manualRegister = function (gulp, config) {
  gulp.task('cssLint', function () {
    return gulp.src(`${config.paths.src}/${config.globs.scss}`)
      .pipe(plumber())
      .pipe(sassLint({
        options: {
          configFile: '.sass-lint.yml'
      }}))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError());
  });
};
