import path from "node:path";
import * as sass from "sass";


// Function to compile Sass files
function compileSass(inputContent, inputPath) {
	let parsed = path.parse(inputPath);
	if (parsed.name.startsWith("_"))
		return;

	let result = sass.compileString(inputContent, {
		loadPaths: [
			parsed.dir || ".",
			this.config.dir.includes,
		]
	});

	this.addDependencies(inputPath, result.loadedUrls);
	return async (data) => result.css;
}


// Export the Eleventy configuration
export default async function (eleventyConfig) {
	// Set the directories
	eleventyConfig.setInputDirectory("src");
	eleventyConfig.setLayoutsDirectory("_layouts");

	// Add template handling for Sass files
	eleventyConfig.addExtension("scss", { outputFileExtension: "css", useLayouts: false, compile: compileSass });
	eleventyConfig.addTemplateFormats("scss");
};
