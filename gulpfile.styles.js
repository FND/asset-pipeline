/* eslint-env node */
"use strict";

let gulp = require("gulp");
let prefix = require("gulp-autoprefixer");
let sass = require("gulp-sass");
let sourcemaps = require("gulp-sourcemaps");
let rename = require("gulp-rename");

const config = {
	entryPoint: "src/styles/index.scss",
	target: {
		directory: "dist",
		filename: "bundle.css"
	},
	prefixes: "last 2 version"
};

gulp.task("default", () => gulp.
	src(config.entryPoint).
	pipe(sourcemaps.init()).
	pipe(sass().on("error", sass.logError)).
	pipe(prefix(config.prefixes)).
	pipe(rename(config.target.filename)).
	pipe(sourcemaps.write()).
	pipe(gulp.dest(config.target.directory)));
