/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.initConfig({
        uglify: {
            my_target: {
                files: { 'wwwroot/app.min.js': ['Scripts/app.js', 'Scripts/**/*.js']}
            }
        },
        
        concat: {
            my_target: {
                files: { 'wwwroot/app.js': ['Scripts/app.js', 'Scripts/**/*.js']}
            }
        },
        
        copy: {
            main: {
                expand: true,
                cwd: 'Templates',
                src: '**',
                dest: 'wwwroot/'

            }
        },
        
        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['uglify', 'concat']
            },
            
            templates: {
                files: ['Templates/**'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('default', ['uglify', 'concat', 'copy', 'watch']);
};