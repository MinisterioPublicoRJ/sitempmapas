// Build projeto
module.exports = function (gulp, plugins, config) {
    gulp.task('build', [], function() {
        gulp.start(
            'buildImg',
            'buildFont',
            'buildCode',
            'copyData',
            'copyVendor'
        );
    });
};
