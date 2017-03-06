'use strict'

module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		imagemin: {
			files: [{
				expand: true,
				cwd: 'img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: "img/dist"
			}],
		}
	});

	grunt.registerTask('imagemin', ['imagemin']);
}