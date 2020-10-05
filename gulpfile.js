const gulp = require('gulp');
const sass = require('gulp-sass');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

gulp.task('sass', done => {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dest/css/'));
    done()
});

gulp.task('ejs', done => {
    gulp.src(['src/ejs/**/*.ejs', '!' + 'src/ejs/layout/_*.ejs'])
        .pipe(ejs())
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('dest/'));
    done()
});

gulp.task('log', done => {
    console.log("DONE");
    done()
});

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass','log'));
    gulp.watch('src/ejs/**/*.ejs', gulp.series('ejs','log'));
});

gulp.task("default",
    gulp.series(
        'watch'
    )
);