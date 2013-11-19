module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      less: {
        files: [
        'LESS/*',
        '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/*',
        '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/partials/*'
        ],
        tasks: ['less']
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      combinejs: {
        files: {
          '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/js/all.min.js': 
          [
          'bower_components/modernizr/modernizr.js',
          'custom_components/responsive_iframes/responsive_iframes.js'
          ]
        }
      }
    },

    less: {
      components: {
        files: {
          '<%= ghost_location %>content/themes/<%= ghost_theme_name %>/assets/css/style.css': ['LESS/less_imports.less']
        }
      },
      options: {
        expand: true,
        paths: [
        'bower_components/lesshat',
        'LESS'
        ]
      }
    },

    'ghost_location': '../ghost-0.3.2/',
    'ghost_theme_name': 'UberTheme',

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};