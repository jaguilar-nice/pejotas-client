module.exports = function(gulp, plugins, config) {

  var glob = [
    config.paths.src.css + '/vendor/*.css',
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/select2/dist/css/select2.min.css'
  ]

  if (config.watch) {
    gulp.watch(glob, ['copy:css'])
  }

  return gulp.src(glob)
    .pipe(plugins.plumber())
    .pipe(gulp.dest(config.paths.dist.css))

}
