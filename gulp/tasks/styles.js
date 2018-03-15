var gulp = require('gulp'),
postcss = require('gulp-postcss'),
sass = require('gulp-sass'),
mqpacker = require('css-mqpacker'),
postcssImport = require('postcss-import'),
autoprefixer = require('autoprefixer'),
size = require('postcss-size'),
fixes = require('postcss-fixes'),
cssnano = require('cssnano');

gulp.task('styles', function () {
	var processors = [
		autoprefixer,
		mqpacker,
		postcssImport,
		size,
		fixes
	];
	return gulp.src('./app/assets/scss/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./app/assets/css'));
});
