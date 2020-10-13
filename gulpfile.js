const gulp = require('gulp');
var cssnano = require('gulp-cssnano'); 
var sass = require('gulp-sass'); 
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');


gulp.task('sass',function(){
    return gulp.src('./scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('allCss.css'))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('img', function(){    
    return gulp.src('./img/*.png')       
        .pipe(gulp.dest('./dist/img')); 
});

gulp.task('fonts', function(){    
    return gulp.src('./fonts/*.ttf')       
        .pipe(gulp.dest('dist/fonts')); 
});


gulp.task('minify-html', function() {
    return gulp.src('./*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'));
  });


gulp.task('watch',function(){
    gulp.watch(['./scss/*.scss'],gulp.series('sass'));
});

