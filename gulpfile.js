const gulp = require('gulp');
const loadGulpTasks = require('./lib/gulp4-tasks-loader');
const config = require('./build.config');

config.rootModule = module;

config.globs = {
  javascript: '**/*.js',
  html: '**/*.html',
  scss: '**/*.scss',
  css: '**/*.css',
  all: '**/*.*'
};

loadGulpTasks({path: './gulp-tasks', arguments: [config], gulp});

gulp.task('clean', gulp.parallel('clean'));
gulp.task('scss', gulp.parallel('sass'));
gulp.task('lint', gulp.parallel('jsLint','cssLint'));
gulp.task('minify', gulp.parallel('compressJS'));
gulp.task('htmlmin', gulp.parallel('compressHTML'));
gulp.task('cssmin', gulp.parallel('compressCSS'));
gulp.task('clean:minJS', gulp.parallel('clean:minJS'));
gulp.task('compress', gulp.series('minify', 'clean:minJS', 'htmlmin', 'cssmin'));
gulp.task('transform-css', gulp.series('scss'));
gulp.task("package", gulp.series("zip"));
gulp.task('default', gulp.series('clean', gulp.parallel('transform-css', 'copy:build')));

gulp.task('start', gulp.series('default', 'lint', 'serve', 'watch'));
gulp.task('serve', gulp.series('serve', 'watch'));
gulp.task('deploy', gulp.series('default', 'lint', 'compress','package'));
