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
            build: ['dist/*']
        },

        jshint: {
            files: ['gruntfile.js', 'source/*.js'],
            options: {
                validthis: true
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
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-include-replace');

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('build', ['clean:build', 'includereplace:build', 'uglify', 'compress:build']);
    grunt.registerTask('compile', ['includereplace:build', 'uglify']);

};
