module.exports = function (gulp, plugins, config) {

  var glob = [
    config.paths.src.root + '/**/*.html'
  ]

  if (config.watch) {
    gulp.watch(glob, [ 'copy:html' ])
  }

  return gulp.src(glob)
    .pipe(plugins.plumber())
    .pipe(gulp.dest(config.paths.dist.root))

}