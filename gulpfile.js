const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require("gulp-sass-glob");
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('sass', done => {
    return gulp.src("./src/sass/**/*")
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dest/css/'));
    done()
});

gulp.task('ejs', done => {
    gulp.src(['./src/ejs/**/*.ejs', '!' + './src/ejs/layout/_*.ejs'])
        .pipe(ejs())
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest('./dest'));
    done()
});

gulp.task('serve', done => {
    browserSync.init({
        server: {
            baseDir: './dest',
            index: 'index.html',
        },
    });
    done()
});

gulp.task('watch', () => {
    const browserReload = done => {
        browserSync.reload()
        done()
    }
    gulp.watch('./dest/**/*', browserReload);
    gulp.watch('./src/sass/**/*', gulp.series('sass','log'));
    gulp.watch('./src/ejs/**/*', gulp.series('ejs','log'));
});

gulp.task('log', done => {
    console.log("DONE");
    done()
});

gulp.task("default",
    gulp.series(
        'sass',
        'serve',
        'watch'
    )
);