/*!
 * vuey v0.0.0 
 * (c) 2016 YerkoPalma
 * Released under the MIT License.
 */
'use strict';

function override (Vue) {
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = 'vuey-ripple';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '../../src/directives/ripple.css';
    link.media = 'all';
    head.appendChild(link);
    init.call(this, options);
  };

  Vue.prototype._destroy = function () {};
}

function ripple (Vue) {
  Vue.directive('ripple', {
    bind: function bind() {
      var _this = this;

      this.handler = function (e) {
        _this.el.classList.add('has-ripple');
        var rect = _this.el.getBoundingClientRect();
        var x = e.pageX - (rect.left + document.body.scrollLeft);
        var y = e.pageY - (rect.top + document.body.scrollTop);
        var point = document.createElement('span');
        point.classList.add('point');
        point.style.top = y + 'px';
        point.style.left = x + 'px';
        point.classList.add('ripple-effect');

        // 2. expand effect on point
        // size
        if (_this.modifiers.small) {
          point.classList.add('small');
        }
        if (_this.modifiers.large) {
          point.classList.add('large');
        }
        if (_this.modifiers.xsmall) {
          point.classList.add('xsmall');
        }
        if (_this.modifiers.xlarge) {
          point.classList.add('xlarge');
        }
        // speed
        if (_this.modifiers.slow) {
          point.classList.add('slow');
        }
        if (_this.modifiers.fast) {
          point.classList.add('fast');
        }

        _this.el.appendChild(point);
        // 3. remove ugly point
        point.addEventListener('animationend', function (e) {
          if (point.parentNode) {
            point.parentNode.removeChild(point);
          }
        });
      };
      this.el.addEventListener('click', this.handler);
    },
    update: function update(newValue, oldValue) {},
    unbind: function unbind() {
      this.el.removeEventListener('click', this.handler);
    }
  });
}

function plugin(Vue) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  override(Vue);
  ripple(Vue);
}

plugin.version = '0.0.0';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;