const htmlmin = require('gulp-htmlmin');

module.exports.manualRegister = function (gulp, config) {
    gulp.task('compressHTML', function() {
        return gulp.src(`${config.paths.build}/${config.globs.html}`)
            .pipe(htmlmin({collapseWhitespace: true,
                            caseSensitive : true}))
            .pipe(gulp.dest(config.paths.build));
    });
};
