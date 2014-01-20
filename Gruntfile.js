module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
               
            },
            json_concat : {
	          	src : ["src/data/*.json"],
	          	dest : "dist/data/all.json",
	          	options: {
	                // Added to the top of the file
	                banner: '[',
	                // Will be added at the end of the file
	                footer: "]",
	                separator: ','
	            }  
            },
            js_concat: {
                src: [
                    // Third-party dependencies
                    'src/js/vendor/jquery.js',
                    'src/js/vendor/underscore.js',
                    'src/js/vendor/backbone.js',
					'src/js/vendor/fastclick.js',
					
                    // Custom files/classes
                    
                    'src/js/Event/Event.js',
                    'src/js/Event/EventCollection.js',
                    'src/js/Screen/Screen.js',
                    'src/js/Screen/GameScreen.js',
                    'src/js/Screen/TitleScreen.js',
                    'src/js/Core/Application.js',
                    'src/js/main.js'
                ],
                dest: 'dist/js/all.js',
            },
            css_concat: {
                src: [
                    'src/css/*.css'
                ],
                dest: 'dist/css/all.css',
            }
        },
        yaml: {
            your_target: {
                options: {
                    ignored: /^_/,
                    space: 4,
                    constructors: {
                        '!include': function (node, yaml) {
                            var data = grunt.file.read(node.value, 'utf-8');
                            return yaml.load(data);
                        }
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'src/data/events',
                    src: ['**/*.yml'],
                    dest: 'src/data/'
                }]
            }
        },
        watch: {
		  scripts: {
		    files: ['src/**/*.*'],
		    tasks: ['default'],
		    options: {
		      spawn: false,
		    },
		  },
		}
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-yaml');
    grunt.loadNpmTasks('grunt-minjson');
    grunt.loadNpmTasks('grunt-merge-json');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default task(s).
    grunt.registerTask('default', ['yaml', 'concat']);

};