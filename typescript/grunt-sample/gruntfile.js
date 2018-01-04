module.exports = function(grunt)
{
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({

        ts:{
            main:{
                src:['typescript/*.ts'],
                out:"javascript/main.js", //combines everything into one file
            }
        }
    });

    grunt.registerTask('default',['ts']);
}