 
// Load modules
import browsersync from 'browser-sync'
import cleanCSS from'gulp-clean-css'
import del from 'del'
import gulp from 'gulp'
import panini from 'panini'
import rename from "gulp-rename"
import uglify from 'gulp-uglify'

// BrowserSync
function browserSync(done) {
browsersync.init({
server: {
baseDir: "./dist"
},
port: 3000
});
done();
}

// BrowserSync reload
function browserSyncReload(done) {
browsersync.reload();
done();
}

// html tasks
function html() {
return gulp
.src('src/pages/**/*.html')
.pipe(panini({
  root: 'src/pages/',
  layouts: 'src/layouts/',
  partials: 'src/partials/',
  helpers: 'src/helpers/',
  data: 'src/data/'
}))
.pipe(gulp.dest('./dist'))
}

// reset page 
function htmlReset(done) {
panini.refresh();
done();
}

// Clean dist
function clean() {
return del(["./dist/"]);
}

// CSS task
function styles() {
return gulp
.src("./src/assets/css/**/*.css")
.pipe(gulp.dest("./dist/assets/css"))
.pipe(rename({
suffix: ".min"
}))
.pipe(cleanCSS())
.pipe(gulp.dest("./dist/assets/css"))
.pipe(browsersync.stream());
}

// JS task
function scripts() {
return gulp
.src(['./src/assets/js/*.js',])
.pipe(uglify())
.pipe(rename({
suffix: '.min'
}))
.pipe(gulp.dest('./dist/assets/js'))
.pipe(browsersync.stream());
}

// img tasks
function images () {
return gulp
.src('src/assets/img/**/*.+(png|jpg|jpeg|gif|svg)')
.pipe(gulp.dest('dist/assets/img/'));
};

// watch tasks
function watchfiles() {
gulp.watch("src/assets/css/**/*",gulp.series(htmlReset,styles,browserSyncReload));
gulp.watch("src/assets/js/**/*", scripts);
gulp.watch('src/pages/**/*', html);
gulp.watch('src/assets/img/**/*', images);
gulp.watch('src/{layouts,includes,helpers,partials}/**/*', gulp.series(htmlReset,html,browserSyncReload));
}

const build = gulp.series(gulp.series(clean, gulp.parallel(html,styles,scripts,images)), gulp.parallel(browserSync,watchfiles));
export default build;