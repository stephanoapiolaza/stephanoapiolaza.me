/**
 * Created by stephanoapiolaza on 14/07/2017.
 */
// This will keeps pipes working after error event
const plumber = require('gulp-plumber');

// linting
const html5Lint = require('gulp-w3cjs');
const through2 = require('through2');
const gulpIf = require('gulp-if');

// Used in linting custom reporter
const notify = require('gulp-notify');

const options = {
  verifyMessage: function(type, message) {
    console.log(`${type}: ${message}`);
    // allow message to pass through
    return true;
  }
};

module.exports.manualRegister = function (gulp, config) {
  gulp.task('htmlLint', function () {
    return gulp.src(`${config.paths.src}/${config.globs.html}`)
      .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
      .pipe(html5Lint(options))
      .pipe(gulpIf("<%= file.w3cjs.success %>" == false,notify("There are errors with HTML5")))
      .pipe(html5Lint.reporter());
  });
};
