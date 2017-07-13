const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

module.exports.manualRegister = function (gulp, config) {
    gulp.task('compressCSS', function() {
        return gulp.src(`${config.paths.build}/${config.globs.css}`)
            .pipe(sourcemaps.init())
            .pipe(cleanCSS())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.paths.build));
    });
};
