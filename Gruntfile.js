module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        includereplace: {
            build: {
                src: 'source/whitewater.js',
                dest: 'dist/whitewater.js',
                options: {
                    prefix: '// @@'
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                footer: '\n',
                sourceMap: true
            },
            build: {
                src: 'dist/whitewater.js',
                dest: 'dist/whitewater.min.js'
            }
        },

        clean: {
            temp: ['dist/*']
        },

        jshint: {
            files: ['gruntfile.js', 'source/*.js', 'examples/*.js'],
            options: {
                validthis: true
            }
        },

        copy: {
            build: {
                expand: true,
                cwd: 'dist/',
                src: '*',
                dest: 'examples/js'
            }
        },

        compress: {
            build: {
                options: {
                    archive: 'dist/whitewater.zip',
                    mode: 'zip'
                },
                files: [{
                    cwd: 'dist/',
                    expand: true,
                    src: '*'
                }]
            },

            example: {
                options: {
                    archive: 'dist/examples.zip',
                    mode: 'zip'
                },
                files: [{
                    cwd: 'examples/',
                    expand: true,
                    src: '**'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'includereplace:build', 'uglify', 'copy:build', 'compress:build', 'compress:example']);
    grunt.registerTask('hint', ['jshint']);

};
