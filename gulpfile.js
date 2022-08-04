const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const htmlmin = require('gulp-htmlmin')
const minify = require('gulp-minify')
const clean = require('gulp-clean')
const mode = require('gulp-mode')()
const cleanCSS = require('gulp-clean-css')

function cleanBuildFolder(cb) {
    gulp
        .src('build', {"allowEmpty": true, read: false})
        .pipe(clean());
    cb()
}

function copyImages(cb) {
    gulp 
        .src('public/images/*')
        .pipe(gulp.dest('build/images/'))
    cb()
}

function buildHtml(cb) {
    gulp
        .src('public/index.html')
        .pipe(mode.production(htmlmin({ collapseWhitespace: true})))
        .pipe(gulp.dest('build/'))
    cb()
}

function buildJavaScript(cb) {
    gulp
        .src('src/index.js')
        .pipe(mode.production(minify({noSource: true, ext: {min: '.js'}})))
        .pipe(gulp.dest('build/js/'))
    cb()
}

function buildStyles(cb) {
    gulp
        .src('src/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(mode.production(cleanCSS()))
        .pipe(gulp.dest('build/css/'))
    cb()
}

function watch() {
    gulp.watch('public/index.html', { ignoreInitial: false }, buildHtml)
    gulp.watch('src/index.js', { ignoreInitial: false }, buildJavaScript)
    gulp.watch('src/scss/style.scss', { ignoreInitial: false }, buildStyles)
    gulp.watch('public/images/*', { ignoreInitial: false }, copyImages)
}

gulp.task('start', gulp.series(cleanBuildFolder, watch))

gulp.task('build', gulp.series(cleanBuildFolder, gulp.series(buildHtml, buildJavaScript, buildStyles, copyImages)))