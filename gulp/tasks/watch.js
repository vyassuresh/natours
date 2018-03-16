var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		},
        // Tunnel the Browsersync server through a random Public URL
        // -> http://randomstring23232.localtunnel.me
        tunnel: true,

        // Attempt to use the URL "http://my-private-site.localtunnel.me"
        tunnel: "mysite"
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/**/*.scss', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});

});

gulp.task('cssInject', ['styles'], function() {

	return gulp.src('./app/assets/css/style.css')
	.pipe(browserSync.stream());

});


gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
