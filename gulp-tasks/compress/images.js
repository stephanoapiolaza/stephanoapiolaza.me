/**
 * Created by stephanoapiolaza on 14/07/2017.
 */
const imageMin = require('gulp-imagemin');
const cache = require('gulp-cache');
const plumber = require('gulp-plumber');

const options = {
  optimizationLevel: 3,
  progressive: true,
  interlaced: true,
  verbose: true
};

module.exports.manualRegister = function (gulp, config) {
  gulp.task('compressImages', function() {
    return gulp.src(`${config.paths.build}/${config.globs.all}`)
      .pipe(plumber())
      .pipe(cache(imageMin(options)))
      .pipe(gulp.dest(config.paths.build));
  });
};
