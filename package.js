Package.describe({
	name: 'akerius:translit',
	version: '0.0.3',
	// Brief, one-line summary of the package.
	summary: 'Transliteration for Meteor',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/ntorgov/meteor-translit',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function (api) {

	api.addFiles('translit.js');
	api.export('translit');
});

