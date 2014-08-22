'use strict';

module.exports = function(grunt) {

    //noinspection JSUnresolvedFunction
    grunt.initConfig({
        watch: {
            scripts: {
                files: [
                    'app/js/*.js',
                    'app/css/*.css',
                    'app/*.html',
                    'app/partials/*.html',
                    'app/data/*.js'
                ],
                options: {
                    livereload: 9090
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', []);
};