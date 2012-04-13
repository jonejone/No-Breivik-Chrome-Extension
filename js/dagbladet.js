
/* Initialize NoBreivik object with configuration options */
new NoBreivik({
	empty_elements: [
		'div[id^=cell-]', // Articles in frontpage
	],
	remove_elements: [
		'.newslist li.bullet-g', // Articles in footer
	],
});