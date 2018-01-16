var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprites'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'svg/sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('copySpriteGraphic', function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySpriteCSS', ['createSprite'], function() {
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'copySpriteCSS']);