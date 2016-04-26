(function(window, document) {
	var w = window,
		doc = document;
	var Ya = function(selector){
		return Ya.prototype.init(selector);
	};
	Ya.prototype = {
		construtor:Ya,
		length:0,
		splice:[].splice,
		selector:'',
		init:function(){

		}
	};
	Ya.prototype.init.prototype = Ya.prototype;
	Ya.ajax = function(){
		console.log("ajax");
	};
	window.Y = Ya;
})(window, document);
