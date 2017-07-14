const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const size = require('gulp-size');

module.exports.manualRegister = function (gulp, config) {
    gulp.task('compressJS', function() {
        return gulp.src([`${config.paths.build}/${config.globs.javascript}`])
            .pipe(size({ title: 'Before:', showFiles: true }))
            .pipe(sourcemaps.init())
            .pipe(minify({
                ignoreFiles: ['.scss', '.eot', '.ttf', '.woff',
                                '.jpg','.png','.ico', '.svg',
                                '.jpeg', '.css.map', '-min.js',
                                '.min.js', '.woff2', '.js.map'],
                ext:{
                    src:'.debug',
                    min:'.js'
                },
                exclude : ['vendor', 'images', 'fonts', 'css']
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.paths.build))
            .pipe(size({ title: 'After:', showFiles: true }));
    });
};
