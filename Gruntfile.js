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
            build: ['dist/*'],
            examples: ['examples/examples.zip', 'examples/dist/*', '!examples/source/**']
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
            },
            examples: {
                files: [
                    {expand: true, flatten: true, cwd: 'examples/source/', src: '*', dest: 'examples/dist/', filter: 'isFile'}, // index.html
                    {expand: true, flatten: true, src: 'examples/source/accordion-content/*', dest: 'examples/dist/subpages'}, // sub-pages
                    {expand: true, cwd: 'dist/', src: ['*.js', '*.map'], dest: 'examples/dist/js/'}, // .js and .js.map
                    {expand: true, cwd: 'examples/source/', src: ['images/**', 'videos/**', 'fonts/**'], dest: 'examples/dist/'} // images, videos, fonts
                ]
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

            examples: {
                options: {
                    archive: 'examples/examples.zip',
                    mode: 'zip'
                },
                files: [{
                    cwd: 'examples/dist/',
                    expand: true,
                    src: '**'
                }]
            }
        },

        compass: {
            examples: {
                options: {
                    sassDir: 'examples/source/styles',
                    cssDir: 'examples/dist/styles'
                }
            }
        },

    });


    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('build', ['clean:build', 'includereplace:build', 'uglify', 'compress:build']);
    grunt.registerTask('build-site', ['clean:examples', 'copy:examples', 'compass:examples', 'compress:examples']);

};
