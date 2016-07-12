
'use strict';

// 此处代码都是由NODE执行
// 载入Gulp模块
var gulp = require('gulp');
var less = require('gulp-less');

// 注册一个任务
gulp.task('copy', function() {
  // 当gulp执行这个say任务时会自动执行该函数
  // console.log('hello world');
  // 合并 压缩之类的操作
  // 复制文件
  // gulo.src取一个文件
  gulp.src('src/1.html')
    .pipe(gulp.dest('dist/')); // 将此处需要的操作传递进去
});


/*gulp.task('sdf', function() {
  // src/index.html
  gulp.watch('src/1.html', ['copy']);
  gulp.watch('src/a.less', ['style']);
});*/

gulp.task('style', function() {
  gulp.src('src/a.less')
    .pipe(less()) // 该环节过后就是CSS
    .pipe(gulp.dest('dist/'));
});


var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;
// gulp.task('bync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     // gulp.watch('src/1.html', ['copy']);
//     gulp.watch('src/a.less', ['style']);
//     gulp.watch('src/1.html').on("change", reload);
//     // gulp.watch("**/*.css").on("change", reload);
// });


// -------------------------------
// or
// -------------------------------

gulp.task('bync', function() {
    var files = [
    '**/*.html',
    '**/*.css',
    '**/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('src/1.html', ['copy']);
    gulp.watch('src/a.less', ['style']);
});
