function translate() {
	this.events = {};
}

translate.prototype.on = function(word, koko) {


	this.events[word] = this.events[word] || [];

	this.events[word].push(koko);
};

translate.prototype.action = function(word){
		if(this.events[word]) {
			this.events[word].forEach(function(koko){
				koko();
			})
		}
}

module.exports = translate;
