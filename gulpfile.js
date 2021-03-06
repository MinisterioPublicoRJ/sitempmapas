// Modulos gulp
var gulp = require("gulp"),
    rev = require('gulp-rev'),
    plugins = require('gulp-load-plugins')({pattern: '*'}),
    config = require('./gulp-config.json');

// Limpa o diretorio
require(config.tasksPath + '/taskClean')(gulp, plugins, config);

// Copia e otimiza imagens
require(config.tasksPath + '/taskBuildImg')(gulp, plugins, config);

// Copia fontes
require(config.tasksPath + '/taskBuildFont')(gulp, plugins, config);

// Minifica e concatena js/css
require(config.tasksPath + '/taskBuildCode')(gulp, rev, plugins, config);

// Copia database
require(config.tasksPath + '/taskCopyData')(gulp, plugins, config);

// Sass
require(config.tasksPath + '/taskSass')(gulp, plugins, config);

// Start server
require(config.tasksPath + '/taskServer')(gulp, plugins, config);

// Build projeto
require(config.tasksPath + '/taskBuild')(gulp, plugins, config);
