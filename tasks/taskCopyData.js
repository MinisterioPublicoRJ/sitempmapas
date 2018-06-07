// Copia database
module.exports = function (gulp, plugins, config) {
    gulp.task("copyData", function(){
        return gulp
            .src('src/data/**/*')
            .pipe(plugins.imagemin([
                plugins.imagemin.optipng({ optimizationLevel: 5 })
            ]))
            .pipe(gulp.dest('dist/data/'));
    });
    gulp.task("copyBootstrap", () => gulp
        .src('node_modules/bootstrap/dist/**/*')
        .pipe(gulp.dest('src/vendor/bootstrap/'))
    )
    gulp.task('copyjQuery', () => gulp
        .src('node_modules/jquery/dist/jquery.slim.min.*')
        .pipe(gulp.dest('src/vendor/jquery'))
    )
    gulp.task('copyPopper', () => gulp
        .src('node_modules/popper.js/dist/umd/popper.min.js*')
        .pipe(gulp.dest('src/vendor/popper'))
    )
    gulp.task('copyVendor', ['copyBootstrap', 'copyjQuery', 'copyPopper'])
};
