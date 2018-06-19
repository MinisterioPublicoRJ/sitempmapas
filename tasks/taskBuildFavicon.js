// Inicia diretorio raiz e copia favicons
module.exports = function (gulp, plugins, config) {
    gulp.task("buildFavicon", ["clean"], function(){
        return gulp
            .src(config.favIcoSrcPath)
            .pipe(gulp.dest(config.favIcoSrcDist));
    });
};
