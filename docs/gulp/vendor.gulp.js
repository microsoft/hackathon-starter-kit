const gulp = require('gulp');
const del = require('del');

const {
  dependencies,
  vendors,
  baseDir,
  isIterableArray,
} = require('./utils.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Vendor
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
// Move vendor css and js files from node_modules to public folder

gulp.task('vendor:temp', () => {
  const modules = Object.keys(dependencies).map((key) => `${key}/**/*`);

  return gulp
    .src(modules, { cwd: 'node_modules', base: './node_modules' })
    .pipe(gulp.dest('temp'));
});

gulp.task('vendor:move', () => {
  const promises = [];
  const addToPromises = (src, dest) =>
    promises.push(
      new Promise((resolve, reject) => {
        gulp
          .src(src)
          .pipe(gulp.dest(dest))
          .on('end', (err) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve();
            }
          });
      })
    );

  Object.keys(vendors).forEach((vendor) => {
    const { src, dest } = vendors[vendor];

    if (typeof src === 'object') {
      if (isIterableArray(src)) {
        src.forEach((file) => {
          addToPromises(
            `./node_modules/${vendor}/${file}`,
            `${baseDir}/vendors/${dest}`
          );
        });
      } else {
        const destDirectories = Object.keys(src);
        destDirectories.forEach((dir) => {
          if (isIterableArray(vendors[vendor].src[dir])) {
            vendors[vendor].src[dir].forEach((file) => {
              addToPromises(
                `./node_modules/${vendor}/${file}`,
                `${baseDir}/vendors/${dest}/${dir}`
              );
            });
          } else {
            addToPromises(
              `./node_modules/${vendor}/${vendors[vendor].src[dir]}`,
              `${baseDir}/vendors/${dest}/${dir}`
            );
          }
        });
      }
    } else {
      addToPromises(
        `./node_modules/${vendor}/${src}`,
        `${baseDir}/vendors/${dest}`
      );
    }
  });

  return Promise.all(promises);
});

gulp.task('vendor:clean', () => {
  const directories = Object.keys(vendors).map(
    (vendor) => `${baseDir}/vendors/${vendors[vendor].dest}`
  );
  const targetedDirectories = [...directories, 'temp'];

  return del(targetedDirectories);
});

gulp.task('vendor', gulp.series('vendor:clean', 'vendor:move'));
