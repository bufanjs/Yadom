(function(window, document) {
    var w = window,
        doc = document;
    var Ya = function(selector) {
        return Ya.prototype.init(selector);
    };
    Ya.prototype = {
        construtor: Ya,
        length: 0,
        splice: [].splice,
        selector: '',
        init: function(selector) {
            //dom判断
            if (!selector) {
                return this;
            }
            var selector = selector.trim(),
                emt;
            if (selector.charAt(0) === '#' && !selector.match('\\s')) {
                selector = selector.substring(1);
                emt = document.getElementById(selector);
                this[0] = emt;
                this.selector = selector;
                this.length = 1;
                return this;
            } else {
                // console.log('obj');
                emt = document.querySelector(selector);
                for (var i = 0; i < emt.length; i++) {
                    this[i] = emt[i];
                }
                // console.log(emt.length);
                this.selector = selector;
                this.length = emt.length;
                return this;
            }

        },
        css: function(attr, val) {
            // console.log(this.length);
            for (var i = 0; i < this.length; i++) {
                if (arguments.length === 1) {
                    return getComputedStyle(this[i], null)[attr];
                }
                this[i].style[attr] = val;
            }
            return this;
        },
        hasClass: function(cls) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            for (var i = 0; i < this.length; i++) {
                if (this[i].className.match(reg)) {
                    return true;
                } else {
                    return false;
                }
            }
            return this;
        },
        addClass: function(cls) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            for (var i = 0; i < this.length; i++) {
                if (!this[i].className.match(reg)) {
                    this[i].className += ' ' + cls;
                }
            }
            return this;
        },
        removeClass: function(cls) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            for (var i = 0; i < this.length; i++) {
                if (this[i].className.match(reg)) {
                    this[i].className = this[i].className.replace(' ' + cls, '');
                }
            }
            return this;
        }
    };
    Ya.prototype.init.prototype = Ya.prototype;
    Ya.ajax = function() {
        console.log('ajax');
    };
    window.Y = Ya;
})(window, document);
