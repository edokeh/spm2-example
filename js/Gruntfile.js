module.exports = function (grunt) {
    grunt.initConfig({
        clean : {
            spm : ['.build'],
            dist : ['sea-modules/example/']
        },
        transport : {
            spm : {
                options : {
                    idleading : 'example/'
                },
                files : [
                    {
                        cwd : 'example',
                        src : '**/*',
                        filter : 'isFile',
                        dest : '.build/src'
                    }
                ]
            }
        },
        concat : {
            options : {
                include : 'relative'
            },
            js : {
                files : {
                    '.build/dist/index.js' : ['.build/src/index.js'],
                    '.build/dist/test.js' : ['.build/src/test.js']
                }
            }
        },

        uglify : {
            js : {
                files : {
                    'sea-modules/example/index.js' : '.build/dist/index.js',
                    'sea-modules/example/test.js' : '.build/dist/test.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [
        'clean:dist', // delete dist direcotry first

        // build css
        'transport:spm',  // src/* -> .build/src/*
//        'concat:css',   // .build/src/*.css -> .build/dist/*.css
//        'cssmin:css',   // .build/dist/*.css -> dist/*.css
//
//        // build js (must be invoke after css build)
//        'transport:css',  // .build/dist/*.css -> .build/src/*.css.js
        'concat:js',  // .build/src/* -> .build/dist/*.js
        'uglify:js',  // .build/dist/*.js -> dist/*.js
//
//        // resource
//        'copy:spm',
        'clean:spm'
//        'newline'
    ]);
};