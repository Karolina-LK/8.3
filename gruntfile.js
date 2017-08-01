module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'main.css': 'main.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'images/',
  				src: ['**/*.{png,jpg,gif}'],
  				dest: 'build/'
  			}]
  		}
  	},

     watch: {
      scripts: {
        files: ['main.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
      }
    }, 

    jshint: {
      all: ['js/*.js']
    }


  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'watch']);
  grunt.registerTask('js', ['jshint']);
};

