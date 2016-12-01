Package.describe({
	name: "akerius:translit",
	version: "0.0.4",
	summary: "Transliteration for Meteor",
	git: "https://github.com/ntorgov/meteor-translit",
	documentation: "README.md"
});

Package.onUse(function (api) {

	api.addFiles("translit.js");
	api.export("translit");
});

