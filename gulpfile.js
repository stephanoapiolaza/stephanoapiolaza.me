const gulp = require('gulp');
const loadGulpTasks = require('./lib/gulp4-tasks-loader');
const config = require('./build.config');

config.rootModule = module;

config.globs = {
  javascript: '**/*.js',
  html: '**/*.html',
  scss: '**/*.scss',
  css: '**/*.css',
  images: '**/*.+(png|jpg|gif|jpeg)',
  all: '**/*.*',
  allDir: '**/*'
};

loadGulpTasks({path: './gulp-tasks', arguments: [config], gulp});

gulp.task('clean', gulp.parallel('clean'));
gulp.task('sass', gulp.parallel('sass'));
gulp.task('lint', gulp.parallel('jsLint','cssLint'));
gulp.task('jsmin', gulp.parallel('compressJS'));
gulp.task('htmlmin', gulp.parallel('compressHTML'));
gulp.task('cssmin', gulp.parallel('compressCSS'));
gulp.task('imgmin', gulp.parallel('compressImages'));
gulp.task('compress', gulp.series('jsmin', 'htmlmin', 'imgmin', 'cssmin'));
gulp.task('concatCSS', gulp.series('concatCSS'));
gulp.task('concatJS', gulp.series('concatJS'));
gulp.task('concat', gulp.series('concatCSS', 'concatJS'));
gulp.task("package", gulp.series("zip"));
gulp.task('default', gulp.series('clean', gulp.parallel('sass', 'copy:build'), 'concat'));

gulp.task('start', gulp.series('default', 'lint', 'serve', 'watch'));
gulp.task('serve', gulp.series('serve', 'watch'));
gulp.task('deploy', gulp.series('default', 'lint', 'compress', 'package'));
