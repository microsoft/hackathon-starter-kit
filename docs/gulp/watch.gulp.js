const gulp = require("gulp");
const { paths, baseDir, browserSync, isProd } = require("./utils.js");
const { compilePug } = require("./pug.gulp.js");

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Watcher
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task("watch", () => {
  // BrowserSync
  browserSync.init({
    server: { baseDir },
    // proxy: '127.0.0.1:8010',
    port: 3000,
    open: true, // or "local"
    notify: false,
    middleware: compilePug,
  });

  const updating = (done) => {
    browserSync.reload();
    done();
  };

  gulp.watch(paths.pug.src.all, gulp.series(updating));
  gulp.watch(paths.style.src, gulp.series("style"));
  // gulp.watch(gulp.series("script"));
  gulp.watch(paths.script.src, gulp.series("script"));
  gulp.watch(
    paths.watch.map((dir) => `${paths.dir.dev}/${dir}`),
    gulp.series(updating)
  );
});
