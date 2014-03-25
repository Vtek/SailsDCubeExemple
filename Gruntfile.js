module.exports = function (grunt) {
    grunt.initConfig({
        concat : {
            dist : {
                src : 'asserts/js/*.js',
                dest : 'asserts/js/myApp.js'
            }
        },
        uglify : {
            dist : {
                src : '<%= concat.dist.dest %>',
                dest : 'public/js/myApp.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'concat' , 'uglify' ]);
}
