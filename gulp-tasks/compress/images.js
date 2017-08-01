/**
 * Created by stephanoapiolaza on 14/07/2017.
 */
const imageMin = require('gulp-imagemin');
const cache = require('gulp-cache');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

const options = {
  optimizationLevel: 5,
  progressive: true,
  interlaced: true,
  verbose: true
};

module.exports.manualRegister = function (gulp, config) {
  gulp.task('compressImages', function() {
    return gulp.src(`${config.paths.media}/${config.globs.all}`)
      .pipe(plumber())
      .pipe(cache(imageMin(options)))
      .pipe(gulp.dest(config.paths.buildMedia))
      .pipe(size({title: 'images'}));
  });
};
