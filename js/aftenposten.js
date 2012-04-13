
/* Initialize NoBreivik object with configuration options */
new NoBreivik({
	empty_elements: [
		'.stories article', // Articles in frontpage
	],

	remove_elements: [
		'.inpage-widget-190 li', // "Siste nytt" right sidebar
	]
});
