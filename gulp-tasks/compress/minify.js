const uglify = require('gulp-uglify');
const size = require('gulp-size');

module.exports.manualRegister = function (gulp, config) {
    gulp.task('compressJS', function() {
        return gulp.src([`${config.paths.build}/${config.globs.javascript}`])
            .pipe(size({ title: 'Before:', showFiles: true }))
            .pipe(uglify())
            .pipe(gulp.dest(config.paths.build))
            .pipe(size({ title: 'After:', showFiles: true }));
    });
};
