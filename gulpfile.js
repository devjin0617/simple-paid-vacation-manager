var gulp = require('gulp');


var files = [
    'src/*'
];


gulp.task('js-webpack-build', () => {

    return gulp.src(files)
        .pipe(debug({title:'combine-js:build'}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/dist/js'))

});