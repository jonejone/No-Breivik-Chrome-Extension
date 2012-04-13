/**
 * Part of the No-Breivik Chrome Extension
 * Will replace all articles on vg.no containing
 * the text 'breivik' with empty placeholders.
 * 
 * Created by Jone Eide <jone@idev.no>
 * https://github.com/jonejone/No-Breivik-Chrome-Extension
 */


// Search for divs starting with 'cell-'
var article_divs = $('.article-extract');

// Contains all elements that should be emptied
var breivik_divs = [];

// Iterate over regular articles
article_divs.each(function(k,v) {
	if(v.innerHTML.search('Breivik') != -1) {
		breivik_divs.push(v);
	}
});

// Iterate through elements that should be emptied
$.each(breivik_divs, function(k,v) {
	v.innerHTML = '';
});