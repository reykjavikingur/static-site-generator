var gulp = require('gulp');
var gutil = require('gulp-util');
var chalk = require('chalk');
var browserSync = require('browser-sync');
var execFile = require('child_process').execFile;
var del = require('del');
var bower = require('main-bower-files');
var normalizeBower = require('gulp-bower-normalize');

gulp.task('start', ['serve']);

gulp.task('serve', ['watch'], function (cb) {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		files: 'dist/**/*'
	}, cb);
});

gulp.task('clean', [], function () {
	return del('dist/*');
});

gulp.task('watch', ['watch:static', 'watch:pages', 'watch:bower']);

gulp.task('build', ['build:static', 'build:pages', 'build:bower']);

gulp.task('watch:static', ['build:static'], function () {
	gulp.watch('src/static/**/*', ['build:static']);
});

gulp.task('build:static', [], function () {
	return gulp.src('src/static/**/*')
		.pipe(gulp.dest('dist/assets'))
		;
});

gulp.task('watch:pages', ['build:pages'], function () {
	gulp.watch(['src/pages/**/*.html', 'src/pages/**/*.js', 'pages.js'], ['build:pages']);
});

gulp.task('build:pages', [], function (cb) {
	execFile('node', ['pages.js', 'src/pages', 'dist'], {}, function (err, stdout, stderr) {
		if (err) {
			gutil.log(chalk.red(err.message));
		}
		if (stderr) {
			gutil.log(chalk.red(stderr));
		}
		cb();
	});
});

gulp.task('watch:bower', ['build:bower'], function () {
	gulp.watch('bower.json', ['build:bower']);
});

gulp.task('build:bower', [], function () {
	return gulp.src(bower(), {
		base: './bower_components'
	})
		.pipe(normalizeBower({
			bowerJson: './bower.json',
			flatten: true
		}))
		.pipe(gulp.dest('dist/assets/vendor'))
		;
});
