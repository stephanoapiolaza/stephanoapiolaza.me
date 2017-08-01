const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const size = require('gulp-size');

// It will remove comment block, to preserve use the /*! notation instead /*
// look at https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
const options = {
  processImport: false,
  processImportFrom: false,
  inline: ['none'],
  level: {
    2: {
      mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
      mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
      mergeMedia: true, // controls `@media` merging; defaults to true
      mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
      mergeSemantically: false, // controls semantic merging; defaults to false
      overrideProperties: true, // controls property overriding based on understandability; defaults to true
      removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
      reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
      removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
      removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
      removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
      removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
      restructureRules: false, // controls rule restructuring; defaults to false
      skipProperties: [] // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
    }
  }
};

module.exports.manualRegister = function (gulp, config) {
  gulp.task('compressCSS', function() {
    return gulp.src(`${config.paths.build}/${config.globs.css}`)
      .pipe(cleanCSS(options, function(details){
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
      }))
      .pipe(gulp.dest(config.paths.build));
  });
}

