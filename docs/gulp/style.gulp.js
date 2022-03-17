const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const rtlcss = require('gulp-rtlcss');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const clone = require('gulp-clone');
const merge = require('merge-stream');

const { paths, baseDir, browserSync } = require('./utils.js');

const getOption = (outputStyle) => ({
  outputStyle,
  precision: 5, // rounding of css color values, etc..
});

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  SCSS Compile
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('style', () => {
  const sourcemapsStream = gulp.src(paths.style.src).pipe(sourcemaps.init());

  const expandedStream = sourcemapsStream
    .pipe(clone())
    .pipe(sass(getOption('expanded')).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }));

  const compressedStream = sourcemapsStream
    .pipe(clone())
    .pipe(sass(getOption('compressed')).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }));

  const ltrCompressedStream = compressedStream
    .pipe(clone())
    .pipe(rename({ suffix: '.min' }));

  const rtlExpandedStream = expandedStream
    .pipe(clone())
    .pipe(gulpIf(paths.rtl, rtlcss()))
    .pipe(gulpIf(paths.rtl, rename({ suffix: '-rtl' })));

  const rtlCompressedStream = compressedStream
    .pipe(clone())
    .pipe(gulpIf(paths.rtl, rtlcss()))
    .pipe(gulpIf(paths.rtl, rename({ suffix: '-rtl.min' })));

  return merge(
    expandedStream,
    ltrCompressedStream,
    rtlExpandedStream,
    rtlCompressedStream
  )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${baseDir}/${paths.style.dest}`))
    .pipe(browserSync.stream());
});
