var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    
    
gulp.task('default', ['index','comboSass','scss','script','watch']);

gulp.task('watch', function(){
    gulp.watch('client/index.html',['index']);
    gulp.watch('client/scripts/app.js',['script']);
    gulp.watch('client/styles/scss/*.scss', ['comboSass', 'scss']);
});


gulp.task('index', function (){
   return gulp.src('client/index.html')
          .pipe(gulp.dest('server/public/')); 
});

gulp.task('script', function (){
   return gulp.src('client/scripts/app.js')
       //   .pipe(uglify())
          .pipe(gulp.dest('server/public/scripts/')); 
});

gulp.task('comboSass', function(){
   return gulp.src('client/styles/scss/*.scss')
          .pipe(concat('style.scss'))
          .pipe(gulp.dest('client/styles/')); 
});

gulp.task('scss', function () {
   return sass('client/styles/style.scss')
          .pipe(gulp.dest('server/public/styles/')); 
});