/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

var gulp     = require('gulp');
var posthtml = require('gulp-posthtml');
var retext   = require('posthtml-retext');
var emoji    = require('retext-emoji');
var smartypants = require('retext-smartypants');

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(posthtml(retext([[emoji, {convert: 'encode'}], smartypants])))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['html']);