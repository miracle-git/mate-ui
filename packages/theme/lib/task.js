var path = require('path')
var fs = require('fs')
var gulp = require('gulp')
var ora = require('ora')
var nop = require('gulp-nop')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin')
var config = require('./config')

exports.fonts = function (opts) {
  var spin = ora(opts.message).start()
  var stream = gulp
    .src(path.resolve(config.themePath, './src/fonts/**'))
    .pipe(opts.minimize || config.minimize ? cssmin({ showLog: false }) : nop())
    .pipe(gulp.dest(path.resolve(opts.out || config.out, './fonts')))
    .on('end', function () {
      spin.succeed()
    })

  return stream
}

exports.build = function (opts) {
  var spin = ora(opts.message).start()
  var stream
  var components
  var cssFiles = '*'

  if (config.components) {
    components = config.components.concat(['base'])
    cssFiles = '{' + components.join(',') + '}'
  }
  var varsPath = path.resolve(config.themePath, './src/common/vars.less')
  fs.writeFileSync(varsPath, fs.readFileSync(path.resolve(process.cwd(), opts.config || config.config)), 'utf-8')

  stream = gulp
    .src([opts.config || config.config, path.resolve(config.themePath, './src/' + cssFiles + '.less')])
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: config.browsers,
        cascade: false
      })
    )
    .pipe(opts.minimize || config.minimize ? cssmin({ showLog: false }) : nop())
    .pipe(gulp.dest(opts.out || config.out))
    .on('end', function () {
      spin.succeed()
    })

  return stream
}
