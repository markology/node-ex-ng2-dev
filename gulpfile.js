var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  path = require("path"),
  tsc = require('gulp-typescript'),
  stylish = require('jshint-stylish'),
  jshint = require('gulp-jshint');

gulp.task('develop', function() {

  livereload.listen();
  livereload({ start: true })
  nodemon({
    execMap: {
      js: 'node --debug'
    },
    script: 'app.js',
    ext: 'html ts js',
    stdout: false,
    debug: true
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', ['develop']);


gulp.task('lint', function() {
  return gulp.src('./dist/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

function buildApp() {
  return gulp.src(["public/Components/main.ts",
      "public/Components/general/404.component.ts",
      "public/Components/general/info.component.ts",
      "public/Components/general/nav.component.ts",
      "public/Components/directives/components/ng2music/ng2music.component.ts",
      "public/Components/directives/components/ng2video/ng2video.component.ts",
      "public/Components/services/upload.service.ts",
      "public/Components/services/http.service.ts",
      "public/Components/services/music.service.ts",
      "public/Components/services/socket.service.ts",
      "public/Components/services/user.service.ts",
      "public/Components/services/auth.service.ts",
      "public/Components/directives/outside.directive.ts",
      "public/Components/pipes/timePump.pipe.ts",
      "public/Components/app.component.ts",
      "public/Components/app.routes.ts"
    ])
    .pipe(tsc({
      typescript: require('typescript'), // In my package.json I have "typescript": "~1.8.0-dev.20151128"
      target: 'ES5',
      module: 'system',
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      outFile: 'app.js',
      sourceMap: true,
      inlineSources: true

    }))
    // Here in my pipe I only have app.js
    .pipe(gulp.dest('./dist'));

}


gulp.task('bundle', function(cb) {
  buildApp();
});

var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function(cb) {
  pump([
      gulp.src('./dist/app.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});
