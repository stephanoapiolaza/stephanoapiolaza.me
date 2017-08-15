const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

module.exports.manualRegister = function (gulp, config) {

	const notSource = [`!${config.paths.scss}/${config.globs.scss}`];

  gulp.task('copy:build::template-off', () => {
    return gulp.src(`${config.paths.src}/${config.globs.javascript}`)
      .pipe(gulp.dest(config.paths.build));
  });

  gulp.task('copy:build:template', () => {
		return gulp.src(`${config.paths.scss}`)
		           .pipe(gulp.dest(config.paths.build));
	});

	gulp.task('copy:build:style', () => {
		return gulp.src(`${config.paths.src}/${config.globs.css}`)
			.pipe(gulp.dest(config.paths.build));
	});

	// Also copies templates
	gulp.task('copy:build:static', () => {
		return gulp.src([
			                `${config.paths.src}/**`
		                ].concat(notSource))
		           .pipe(gulp.dest(config.paths.build));
	});

	gulp.task('copy:build:lib', () => {
		gulp.src(config.vendor.polyfills)
			.pipe(concat('vendors.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest(`${config.paths.build}/${config.vendor.name}`));
		return gulp.src([config.vendor.thidLibraries, config.vendor.core], { base: "./node_modules/" }).pipe(gulp.dest(`${config.paths.build}/${config.vendor.name}`));
	});

	gulp.task('copy:build', gulp.parallel('copy:build:static'));
};
