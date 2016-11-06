var HandlebarsGenerator = require('handlebars-generator');
var Handlebars = require('handlebars');

var args = process.argv.slice(2);
var sourcePath = args[0];
var outputPath = args[1];

HandlebarsGenerator.generateSite(sourcePath, outputPath)
	.then(function () {
		console.log('successfully generated pages');
	}, function (e) {
		console.error('failed to generate pages', e);
	})
;
