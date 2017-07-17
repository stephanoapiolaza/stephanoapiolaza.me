const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer=  require('gulp-autoprefixer');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

module.exports.manualRegister = function (gulp, config) {
    gulp.task('sass', function () {
        return gulp.src(`${config.paths.src}/${config.globs.scss}`, { base: `${config.paths.scss}`})
            .pipe(sass({
              precision: 10
            }).on('error', sass.logError))
            .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
            .pipe(gulp.dest(config.paths.buildCss));
    });
};
