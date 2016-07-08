module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            examples: ['example_site.zip', 'example_videos.zip', 'favicon.ico', 'index.html', 'safari-pinned-icon.svg', '*/', '!_source/', '!node_modules/'],
        },

        copy: {
            examples: {
                files: [
                    {expand: true, flatten: true, cwd: '_source/', src: '*', dest: '', filter: 'isFile'}, // index.html
                    {expand: true, flatten: true, src: '_source/accordion-content/*', dest: 'subpages'}, // sub-pages
                    {expand: true, cwd: '_source/', src: ['images/**', 'videos/**', 'fonts/**'], dest: ''} // images, videos, fonts
                ]
            }
        },

        compress: {
            examples: {
                options: {
                    archive: 'example_site.zip',
                    mode: 'zip'
                },
                files: [
                    {src: ['favicon.ico', 'index.html', 'safari-pinned-icon.svg'], dest: ''},
                    {src: ['*/**', '!_source/**', '!node_modules/**'], dest: ''}
                ]
            },
            videos: {
                options: {
                    archive: 'example_videos.zip',
                    mode: 'zip'
                },
                files: [
                    {expand: true, flatten: true, cwd: '_source/video_source/', src: '**', dest: '', filter: 'isFile'}
                ]
            }
        },

        compass: {
            examples: {
                options: {
                    sassDir: '_source/styles',
                    cssDir: 'styles'
                }
            }
        },

        shell: {
            checkoutsource: {
                command: [
                    'git checkout master -- dist/whitewater.min.js dist/whitewater.min.js.map',
                    'mkdir js',
                    'mv dist/whitewater.min.js js/whitewater.min.js',
                    'mv dist/whitewater.min.js.map js/whitewater.min.js.map',
                    'rm -rf dist'
                ].join('&&')
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('test', ['clean:examples', 'copy:examples', 'compass:examples']);
    grunt.registerTask('build', ['clean:examples', 'copy:examples', 'shell:checkoutsource', 'compass:examples', 'compress:examples', 'compress:videos']);

};
