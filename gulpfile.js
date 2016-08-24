var gulp = require('gulp'),
	less = require('gulp-less'),
	tip = require('gulp-notify'),
	plumber = require('gulp-plumber')

gulp.task('LessToCcss', function(){
	gulp.src('src/**/*.less')
	    .pipe(plumber({errorHandle:tip.onError('error:<%=error.message%>')}))
	    .pipe(less())
 	    .pipe(gulp.dest('src/css'))

})
gulp.task('watchLess', function () {
	gulp.watch('src/**/*.less',['LessToCcss'])
})
gulp.task('default',['LessToCcss'])
