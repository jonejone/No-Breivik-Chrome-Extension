/* Constructor for NoBreivik object */
var NoBreivik = function(config) {
	this.config = config;
	this.empty_elements = [];
	this.remove_elements = [];
	this.removed_links = [];
	this.queries = ['Breivik', 'breivik'];
	this.debug_container = false;

	if(this.config.debug) {
		this.buildDebugContainer();
	}

	this.find();
	this.remove();
	this.empty();

	if(this.config.debug) {
		this.updateDebugContainer();
	}

	this.log();
};

NoBreivik.prototype = {

	/* Will find elements to empty or remove */
	find: function() {
	
		var that = this;

		if(this.config.empty_elements) {
			var empty_elements_search = $(this.config.empty_elements.join(', '));

			empty_elements_search.each(function(k,v) {
				if(that.match(v)) {
					that.empty_elements.push(v);
				}
			});
		}

		if(this.config.remove_elements) {
			var remove_elements_search = $(this.config.remove_elements.join(', '));

			remove_elements_search.each(function(k,v) {
				if(that.match(v)) {
					that.remove_elements.push(v);
				}
			});
		}
	},

	/* Find links in article */
	findLinks: function(element) {
		var that = this;
		$(element).find('a').each(function(k,v) {
			that.removed_links.push(v.href);
		});
	},
	
	/* Check if an element has content that matches our query */
	match: function(element) {
		var found = false;

		$.each(this.queries, function(k,v) {
			if(element.innerHTML.search(v) != -1) {
				found = true;
			}
		});

		return found;
	},

	/* Will remove elements waiting to be removed */
	remove: function() {
		var that = this;
		$.each(this.remove_elements, function(k,v) {
			that.findLinks(v);
			$(v).remove();
		});
	},

	/* Will empty elements waiting to be emptied */
	empty: function() {
		var that = this;
		$.each(this.empty_elements, function(k,v) {
			that.findLinks(v);
			v.innerHTML = '';
		});
	},

	updateDebugContainer: function() {
		var search = this.debug_container.find('span');
		var emptied = $(search.get(0));
		var removed = $(search.get(1));
		var links = $(search.get(2));

		emptied.html(this.empty_elements.length);
		removed.html(this.remove_elements.length);
		links.html(this.removed_links.length);
	},

	buildDebugContainer: function() {
		this.debug_container = $('<ul class="nobreivik-debug-container"><li>No-Breivik Debug</li></ul>');
	
		this.debug_container.append($('<li>Emptied: <span>0</span></li>'));
		this.debug_container.append($('<li>Removed: <span>0</span></li>'));
		this.debug_container.append($('<li>Links: <span>0</span></li>'));

		$(document.body).append(this.debug_container);
	},

	/* Save information about what we've done back to the API */
	log: function() {
		/* Disabled for now

		var removed = this.empty_elements.length + 
			this.remove_elements.length;

		var structure = {
			removed: removed,
			links: this.removed_links,
		};

		var url = 'http://jone-eide.com/no-breivik/api/';

		$.post(url, structure, function() {
		});

		*/
	}
};