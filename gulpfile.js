const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require('browser-sync').create();

sass.compiler = require("sass");


function server(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    cb();
}

function css() {
  return gulp.src("./scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: "expanded"  //expanded, compact, nested, compressed
    }).on('error', sass.logError))
    .pipe(autoprefixer({}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch(cb) {
    gulp.watch("./scss/**/*.scss", gulp.series(css));
    gulp.watch("./*.html").on('change', browserSync.reload);
    cb();
}



module.exports.css = css;
module.exports.watch = watch;
module.exports.default = gulp.series(server, css, watch);
