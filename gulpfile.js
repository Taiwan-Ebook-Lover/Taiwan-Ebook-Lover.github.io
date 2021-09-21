const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const cache = require('gulp-cached');
const cleanCSS = require('gulp-clean-css');
const debug = require('gulp-debug');
const gulpless = require('gulp-less');
const postcss = require('gulp-postcss');
const NpmImportPlugin = require('less-plugin-npm-import');

gulp.task('less-compile', (done) => {
  gulp
    .src('src/themes/*-theme.less')
    .pipe(cache('less-to-css'))
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

  done();
});

gulp.task('watch-themes-change', function () {
  gulp.watch('src/themes/*-theme.less', gulp.series('less-compile'));
});

gulp.task('auto-update-theme', gulp.series('less-compile', 'watch-themes-change'));
