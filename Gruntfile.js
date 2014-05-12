/**
 * Created with IntelliJ IDEA.
 * User: Joe
 * Date: 4/30/14
 * Time: 10:45 AM
 */

module.exports = function(grunt) {

    //noinspection JSUnresolvedFunction
    grunt.initConfig({
        watch: {
            scripts: {
                files: [
                    'app/js/*.js',
                    'app/css/*.css',
                    'app/index.html',
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
}