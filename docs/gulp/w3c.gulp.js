const gulp = require('gulp');
const { argv } = require('yargs');
const w3cjs = require('gulp-w3cjs');
const through = require('through2');
const ansi = require('ansi');

const { paths, baseDir } = require('./utils');

const cursor = ansi(process.stdout);

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|   w3c validation for HTML
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('w3cjs', (done) => {
  let htmlfiles = `${baseDir}/${paths.pug.dest}/**/*.html`;
  if (argv.html) {
    htmlfiles = `${paths.dir.dev}/${argv.html}.html`;
    cursor.hex('#00ffff').bold();
    console.log('html: ', htmlfiles);
    cursor.reset();
  }

  return gulp
    .src(htmlfiles)
    .pipe(w3cjs())
    .pipe(
      through.obj((file, enc, cb) => {
        console.log({
          url: file.history[0],
          ...(!file.w3cjs.success ? { ...file.w3cjs } : {}),
        });
        cb();
      })
    )
    .pipe(w3cjs.reporter())
    .on('end', () => {
      done();
    });
});

gulp.task('w3c', gulp.series('pug', 'w3cjs'));
