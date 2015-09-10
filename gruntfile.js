module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                //options: {                       // Target options
                //    style: 'compressed'
                //},
                //'app/scss/main.css' : 'app/scss/main.scss',
                //'app/scss/vendor.css' : 'app/scss/vendor.scss'
                files: [{
                    expand: true,
                    cwd: "app/elements",
                    src: ["**/*.scss"],
                    dest: "app/elements",
                    ext: ".css"
                }, {
                    'app/scss/main.css' : 'app/scss/main.scss',
                    'app/scss/vendor.css' : 'app/scss/vendor.scss'
                }]
            }
        },
        sassdoc: {
            default: {
                src: 'app/scss/**/*.scss',
                options: {
                    dest: './styleguides/fabricator/dist/assets/sassdoc'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['./app/elements/**/*'], dest: './styleguides/kss/template/public/'},
                    {expand: true, src: ['./app/bower_components/**/*'], dest: './styleguides/kss/template/public/'},

                ]
            },
        },
        kss: {
            options: {
                css: './app/scss/main.css',
                template: './styleguides/fabricator/dist/assets/kss/template',
            },
            dist: {
                files: {
                    './styleguides/fabricator/dist/assets/kss': ['./app']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-kss');


    grunt.registerTask('styleguide', ['kss', 'copy']);
    grunt.registerTask('default',['watch']);

}
