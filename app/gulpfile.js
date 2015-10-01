var gulp = require('gulp')

var browserify = require('browserify')
var reactify = require('reactify')
var source = require('vinyl-source-stream')

gulp.task('js',function() {
    browserify('static/javascript/src/wrapper.jsx').transform(reactify).bundle().pipe(source('wrapper.js')).pipe(gulp.dest('static/javascript/build'))
});

gulp.task('default',['js']);