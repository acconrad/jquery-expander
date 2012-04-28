/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      dist: {
        src: ['src/**/*.css', 'test/**/*.css'],
        dest: 'dist/<%= pkg.name %>.min.css'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jasmine: {
      all: ['specs/specrunner.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    csslint: {
      base_theme: {
        src: ['src/**/*.css', 'test/**/*.css'],
        rules: {
          "adjoining-classes": false,
          "box-model": true,
          "box-sizing": "warning",
          "compatible-vendor-prefixes": "warning",
          "display-property-grouping": true,
          "duplicate-background-images": "warning",
          "duplicate-properties": true,
          "empty-rules": true,
          "errors": true,
          "fallback-colors": "warning",
          "floats": "warning",
          "font-faces": "warning",
          "font-sizes": "warning",
          "gradients": "warning",
          "ids": "warning",
          "import": "warning",
          "important": "warning",
          "known-properties": true,
          "outline-none": "warning",
          "overqualified-elements": "warning",
          "qualified-headings": "warning",
          "regex-selectors": "warning",
          "rules-count": "warning",
          "shorthand": "warning",
          "text-indent": "warning",
          "unique-headings": "warning",
          "universal-selector": "warning",
          "vendor-prefix": true,
          "zero-units": "warning"
        }
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        latedef: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        laxcomma: true,
        asi: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.registerTask('default', 'lint qunit concat min cssmin csslint');

};
