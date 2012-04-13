

/* Search for divs starting with 'cell-' */
var article_divs = $('div[id^=cell-]');
var breivik_divs = [];

article_divs.each(function(k,v) {
	if(v.innerHTML.search('Breivik') != -1) {
		breivik_divs.push(v);
	}
});

$.each(breivik_divs, function(k,v) {
	v.innerHTML = '';
});

alert('Found ' + article_divs.length + ' article divs, ' + breivik_divs.length + ' breivik divs');