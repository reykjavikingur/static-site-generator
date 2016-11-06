# Static Site Generator

This is a Node project that generates a static site from source files and simple commands.

You can clone this project and make a few simple modifications to get started quickly
on your own static site project.

## To Get Started

* Fork the repository
* Clone your fork locally
* Edit `package.json` to have a different name and repository.
* `npm install`

## To Use

* `npm start`

This will start a local web server on an available port and watch your files for changes.

## Files

* `src/pages/**/*.html` are the Handlebars templates and are compiled to `dist`
* `src/styles/**/*.scss` are the SASS files and are compiled to `dist/assets/styles`
* `src/static/**/*` are the static files and are compiled to `dist/assets`

## Bower

External third-party script dependencies can be managed with Bower and are copied to `dist/assets/vendor`
