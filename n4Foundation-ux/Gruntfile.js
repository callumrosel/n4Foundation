/*jshint node: true */

"use strict";

var SRC_FILES = [
    'src/rc/**/*.js',
    'Gruntfile.js',
    '!src/rc/**/*.built.js',
    '!src/rc/**/*.min.js',
    '!src/rc/js/require/require-js-config-foundation.js',
    '!src/rc/js/vendor/*.js'
  ],
  SPEC_FILES = [
    'srcTest/rc/spec/**/*.js'
  ],
  TEST_FILES = [
    'srcTest/rc/*.js'
  ],
  ALL_FILES = SRC_FILES.concat(SPEC_FILES).concat(TEST_FILES);

module.exports = function runGrunt(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsdoc:     { src: SRC_FILES.concat(['README.md']) },
    jshint:    { src: ALL_FILES },
    plato:     { src: SRC_FILES },
    watch:     { src: ALL_FILES },
    karma:     {},
    niagara:   {
      station: {
        stationName: 'n4Foundation',
        forceCopy: true,
        sourceStationFolder: './srcTest/rc/stations/n4FoundationUnitTest'
      }
    }
  });

  grunt.loadNpmTasks('grunt-niagara');
};
