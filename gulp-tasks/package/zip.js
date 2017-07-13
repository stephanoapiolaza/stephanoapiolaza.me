/**
 * Created by stephanoapiolaza on 13/07/2017.
 */
const zip = require('gulp-zip');

module.exports.manualRegister = function (gulp, config) {
  gulp.task('zip', function () {
    return gulp.src(`${config.paths.build}/${config.globs.all}`)
      .pipe(zip(`${config.package.name}`))
      .pipe(gulp.dest(`${config.package.path}`))
  });
};

