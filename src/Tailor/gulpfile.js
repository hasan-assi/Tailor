/// <binding BeforeBuild='default' Clean='clean' />
"use strict";

var path = require('path');
var gulp = require('gulp');
var del = require('del');
var eventStream = require('event-stream');
var typescript = require('gulp-typescript');
var inlineNg2Template = require('gulp-inline-ng2-template');
var sourcemaps = require('gulp-sourcemaps');
var bower = require('gulp-bower');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var dnx = require('gulp-dnx');
var useref = require('gulp-useref');

var project = require("./project.json");

var paths = {
    webroot: "./wwwroot/",
    webrootLibDev: "./wwwroot/lib-dev",
    webrootLib: "./wwwroot/lib"
};
var webroot = paths.webroot;

paths.cleanjsmap = paths.webroot + "app/**/*.js.map";
paths.cleanjs = paths.webroot + "app/**/*.js";
paths.ts = paths.webroot + "**/*.ts";
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

var config = {
    libBase: 'node_modules',
    lib: [
        require.resolve('bootstrap/dist/css/bootstrap.css'),
        path.dirname(require.resolve('bootstrap/dist/fonts/glyphicons-halflings-regular.woff')) + '/**',
        require.resolve('systemjs/dist/system.src.js'),
        require.resolve('jquery/dist/jquery.js'),
        require.resolve('bootstrap/dist/js/bootstrap.js'),
        require.resolve('rxjs/bundles/Rx.js')
    ]
};



gulp.task("clean:js", function (cb) {
    del([paths.concatJsDest, paths.cleanjsmap, paths.cleanjs], cb);
});

gulp.task("clean:css", function (cb) {
    del(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean.lib-dev", "clean.lib"]);

gulp.task("clean.lib-dev", function () {
    del(paths.webrootLibDev);
});

gulp.task('clean.lib', function () {
    return del(paths.webrootLib);
});

gulp.task('build.lib', function () {
    return gulp.src(config.lib, { base: config.libBase })
        .pipe(gulp.dest(webroot + 'lib'));
});

gulp.task('build-prod', ['build.lib'], function () {
    var tsProject = typescript.createProject('./tsconfig.json', { typescript: require('typescript') });
    var tsSrcInlined = gulp.src([webroot + '**/*.ts'], { base: webroot })
        .pipe(inlineNg2Template({ base: webroot }));
    return eventStream.merge(tsSrcInlined, gulp.src('Typings/**/*.ts'))
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(webroot));
});

gulp.task('build-dev', ['build.lib'], function () {

});

//no called yet.
gulp.task('bower', function () {
    return bower()
      .pipe(gulp.dest('lib/'))
});

gulp.task('default', ['build-dev']);

gulp.task('hello', function () {
    console.log("hello Hasan");
});

var scssRoot = webroot + 'scss/';
gulp.task('sass', function() {
    return gulp.src(scssRoot + '**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest(webroot + 'css'));
    //.pipe(browserSync.reload({
    //        stream:true
    //    }));
});

gulp.task('watch',['sass'], function() {
    gulp.watch(scssRoot + '**/*.scss', ['sass']);

    //// Reloads the browser whenever HTML or JS files change
    //gulp.watch('app/*.html', browserSync.reload);
    //gulp.watch('app/js/**/*.js', browserSync.reload);
});

//gulp.task('browserSync', function() {
//    browserSync.init(null, {
//        proxy: "http://localhost:5000",
//        port: 5001
//    });
//});
gulp.task('browsersync', ['web'], function () {
    browserSync.init(null, {
        proxy: "http://localhost:5000"
    });
});

var options = {
    restore: false,
    build: false,
    run: true,
    cwd: './'
};

gulp.task('server', dnx('web', options));

gulp.task('web', function () {
    return gulp.start('server');
});