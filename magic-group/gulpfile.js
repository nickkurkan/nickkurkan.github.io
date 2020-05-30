const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      concat = require('gulp-concat'),
      bs = require('browser-sync'),
      webpack = require('webpack-stream');

function javascriptsDEV() {
  return gulp.src('src/js/**/main.js')
        .pipe(webpack({
          mode: 'development',
          output: {
            filename: 'main.js'
          }
        }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(bs.stream());
}

function javascriptsPROD () {
  return gulp.src('src/js/main.js')
        .pipe(webpack({
          mode: 'production',
          output: {
            filename: 'main.js'
          }
        }))
        .pipe(uglify({
          toplevel: true
        }))
        .pipe(gulp.dest('dist/js/'));  
}

function cssDEV () {
  return gulp.src('css_src/*.css')
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
          browsers: ['> 0.1%'],
          cascade: false
        }))
        .pipe(gulp.dest('css'));
        //.pipe(bs.stream());
}

function cssPROD () {
  return gulp.src('src/css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
          browsers: ['> 0.1%'],
          cascade: false
        }))
        .pipe(cleanCSS({
          level: 2
        }))
        .pipe(gulp.dest('dist/css'))
}

function watch () {
  bs.init({
    server: './',
    tunnel: 'my-site'
  })

  gulp.watch('src/js/**/*.js', javascriptsDEV);
  gulp.watch('src/css/**/*.css', cssDEV);
  gulp.watch('./*.html', bs.reload)
}

gulp.task('dev', watch);
gulp.task('prod', gulp.parallel(javascriptsPROD, cssPROD));
gulp.task('cssdev', cssDEV);
