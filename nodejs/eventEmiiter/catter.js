function catter() {
	this.events = {};
}

catter.prototype.on = function(catName, listener) {
	this.events[catName] = this.events[catName] || [];
	this.events[catName].push(listener);
}

catter.prototype.mow = function(catName) {
	if (this.events[catName]) {
		this.events[catName].forEach(function(listener) {
			listener();
		});
	}
}

module.exports = catter;