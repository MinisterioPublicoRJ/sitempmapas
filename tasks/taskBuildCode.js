// Minifica, concatena codigos js/css e move para build
module.exports = function (gulp, rev, plugins, config) {
    gulp.task("buildCode", function(){
        return gulp
            .src(config.htmlSrcPath)
            .pipe(plugins.usemin({
                // jsLib:[plugins.uglify, rev],
                // jsScript:[plugins.uglify, rev],
                js:[rev],
                css:[plugins.autoprefixer, plugins.cssmin, rev],
                html: [function () {
                    return plugins.htmlmin({
                        collapseWhitespace: true,
                        removeComments: true,
                        collapseInlineTagWhitespace: true,
                    });
                }],
            }))
            .pipe(gulp.dest(config.srcDist));
    });
};
