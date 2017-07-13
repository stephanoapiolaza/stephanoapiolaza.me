const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports.manualRegister = function (gulp, config) {
    gulp.task('sass', function () {
        return gulp.src(`${config.paths.src}/${config.globs.scss}`, { base: `${config.paths.scss}`})
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.paths.buildCss));
    });
};
