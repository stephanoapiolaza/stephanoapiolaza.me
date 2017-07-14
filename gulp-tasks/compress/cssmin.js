const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
// It will remove comment block, to preserve use the /*! notation instead /*
// look at https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
const options = {
  debug: true,
  compatibility: 'ie8'
};
module.exports.manualRegister = function (gulp, config) {
    gulp.task('compressCSS', function() {
        return gulp.src(`${config.paths.build}/${config.globs.css}`)
            .pipe(sourcemaps.init())
            .pipe(cleanCSS(options, function(details){
              console.log(details.name + ': ' + details.stats.originalSize);
              console.log(details.name + ': ' + details.stats.minifiedSize);
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.paths.build));
    });
};
