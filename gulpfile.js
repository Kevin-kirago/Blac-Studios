"use strict";

var gulp = require("gulp"),
	concat = require("gulp-concat");

gulp.task("concat", async function() {
	gulp.src(["js/bootstrap.min.js", "js/jquery.min.js", "js/popper.min.js", "js/app.js"])
		.pipe(concat("main.js"))
		.pipe(gulp.dest("js"));
});

gulp.task("hello", function() {
	console.log("hello");
});
