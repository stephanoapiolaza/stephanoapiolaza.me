module.exports = function (gulp, config, done) {

	gulp.watch([`${config.paths.src}/${config.globs.javascript}`],
	           gulp.series('copy:build::template-off','server:reload'));

	gulp.watch([`${config.paths.src}/${config.globs.html}`],
	           gulp.series('copy:build:template', 'server:reload'));

	gulp.watch([`${config.paths.src}/${config.globs.css}`],
		gulp.series('copy:build:style', 'server:reload'));

	gulp.watch([`${config.paths.src}/${config.globs.scss}`],
				gulp.series('sass'));

	done();
};

// TODO Record watch for tests
