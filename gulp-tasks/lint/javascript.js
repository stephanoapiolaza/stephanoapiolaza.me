/**
 * Created by stephanoapiolaza on 13/07/2017.
 */

// This will keeps pipes working after error event
const plumber = require('gulp-plumber');

// linting
const jsHint = require('gulp-jshint');
const jsHintStylish = require('jshint-stylish');

// Used in linting custom reporter
const notify = require('gulp-notify');
const map = require('map-stream');
const path = require('path');
const events = require('events');
const emmitter = new events.EventEmitter();

module.exports.manualRegister = function (gulp, config) {
  gulp.task('jsLint', function () {
    return gulp.src([`${config.paths.js}/${config.globs.javascript}`])
      .pipe(plumber())
      .pipe(jsHint('.jshintrc', {fail: true}))
      .pipe(jsHint.reporter(jsHintStylish)) // Beatiful Console Output
      .pipe(jsHintErrorReporter) // If error pop up a notify alert
      .on('error', notify.onError(function (error) {
        return error.message;
      }));
  });
};

const jsHintErrorReporter = map(function (file, cb) {
  if (!file.jshint.success) {
    file.jshint.results.forEach( function(err) {
      if (err) {
        // Error message
        var msg = [
          path.basename(file.path),
          'Line: ' + err.error.line,
          'Reason: ' + err.error.reason
        ];
        // Emit this error event
        emmitter.emit('error', new Error(msg.join('\n')));
      }
    });

  }
  cb(null, file);
});
