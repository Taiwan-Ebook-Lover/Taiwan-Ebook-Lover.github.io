const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const cache = require('gulp-cached');
const cleanCSS = require('gulp-clean-css');
const debug = require('gulp-debug');
const gulpif = require('gulp-if');
const gulpless = require('gulp-less');
const postcss = require('gulp-postcss');
const NpmImportPlugin = require('less-plugin-npm-import');

const compilePipe = (isCommonTheme) => {
  return gulp
    .src('src/themes/*-theme.less')
    .pipe(gulpif(!isCommonTheme, cache('less-to-css')))
    .pipe(debug({ title: 'Less files:' }))
    .pipe(
      gulpless({
        javascriptEnabled: true,
        plugins: [new NpmImportPlugin({ prefix: '~' })],
      }),
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public'));
};

gulp.task('themes-compile', (done) => {
  compilePipe(false);
  done();
});

gulp.task('common-theme-compile', (done) => {
  compilePipe(true);
  done();
});

gulp.task('watch-themes-change', () => {
  gulp.watch('src/themes/*-theme.less', gulp.series('themes-compile'));
  gulp.watch('src/themes/common.less', gulp.series('common-theme-compile'));
});

gulp.task('auto-update-theme', gulp.series('themes-compile', 'watch-themes-change'));
