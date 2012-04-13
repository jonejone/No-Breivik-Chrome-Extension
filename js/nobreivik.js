/* Constructor for RemoveBreivik object */
var NoBreivik = function(config) {
	this.config = config;
	this.empty_elements = [];
	this.remove_elements = [];
	this.queries = ['Breivik', 'breivik'];

	this.find();
	this.remove();
	this.empty();
};

NoBreivik.prototype = {

	/* Will find elements to empty or remove */
	find: function() {
		
		var that = this;
		var empty_elements_search = $(this.config.empty_elements.join(', '));
		var remove_elements_search = $(this.config.remove_elements.join(', '));

		empty_elements_search.each(function(k,v) {
			if(that.match(v)) {
				that.empty_elements.push(v);
			}
		});
		
		remove_elements_search.each(function(k,v) {
			if(that.match(v)) {
				that.remove_elements.push(v);
			}
		});
	},
	
	/* Check if an element has content that matches our query */
	match: function(element) {
		var found = false;

		$.each(this.queries, function(k,v) {
			console.log('Searching for ', v, ' in ', element.innerHTML);
			if(element.innerHTML.search(v) != -1) {
				found = true;
			}
		});

		return found;
	},

	/* Will remove elements waiting to be removed */
	remove: function() {
		$.each(this.remove_elements, function(k,v) {
			console.log('Removing elm: ', v);
			$(v).remove();
		});
	},

	/* Will empty elements waiting to be emptied */
	empty: function() {
		$.each(this.empty_elements, function(k,v) {
			console.log('Emptying elm: ', v);
			v.innerHTML = '';
		});
	}
};