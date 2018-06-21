// Build projeto
module.exports = function (gulp, plugins, config) {
    gulp.task('build', ['sass'], function() {
        gulp.start(
            'buildImg',
            'buildFont',
            'buildCode',
            'copyData',
            'copyVendor'
        );
    });
};
