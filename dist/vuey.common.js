/*!
 * vuey v0.0.6 
 * (c) 2016 YerkoPalma
 * Released under the MIT License.
 */
'use strict';

function override (Vue) {
  var init = Vue.prototype._init;
  Vue.prototype._init = function (options) {
    if (!document.getElementById('vuey')) {
      var head = document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.id = 'vuey';
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'node_modules/vuey/dist/ripple.min.css';
      link.media = 'all';
      head.appendChild(link);
    }
    init.call(this, options);
  };

  Vue.prototype._destroy = function () {};
}

function ripple (Vue) {
  Vue.directive('ripple', {
    bind: function bind() {
      var _this = this;

      var vm = this.vm;
      var rippleOptions = vm.$options.ripple || {};
      this.handler = function (e) {
        _this.el.classList.add('has-ripple');
        var rect = _this.el.getBoundingClientRect();
        var x = e.pageX - (rect.left + document.body.scrollLeft);
        var y = e.pageY - (rect.top + document.body.scrollTop);
        var point = document.createElement('span');
        point.classList.add('point');
        point.style.top = y + 'px';
        point.style.left = x + 'px';
        // callback before
        if (typeof rippleOptions.before === 'function') {
          rippleOptions.before();
        }
        point.classList.add('ripple-effect');

        // apply options
        if (rippleOptions.color && typeof rippleOptions.color === 'string') {
          point.style['background-color'] = rippleOptions.color;
        }
        if (rippleOptions.speed) {
          point.style['animation-duration'] = vm.$options.ripple.speed + 's';
        }

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
        // colors
        if (_this.modifiers.black) {
          point.classList.add('black');
        }
        if (_this.modifiers.red) {
          point.classList.add('red');
        }
        if (_this.modifiers.pink) {
          point.classList.add('pink');
        }
        if (_this.modifiers.purple) {
          point.classList.add('purple');
        }
        if (_this.modifiers.indigo) {
          point.classList.add('indigo');
        }
        if (_this.modifiers.blue) {
          point.classList.add('blue');
        }
        if (_this.modifiers.cyan) {
          point.classList.add('cyan');
        }
        if (_this.modifiers.teal) {
          point.classList.add('teal');
        }
        if (_this.modifiers.green) {
          point.classList.add('green');
        }
        if (_this.modifiers.lime) {
          point.classList.add('lime');
        }
        if (_this.modifiers.yellow) {
          point.classList.add('yellow');
        }
        if (_this.modifiers.amber) {
          point.classList.add('amber');
        }
        if (_this.modifiers.orange) {
          point.classList.add('orange');
        }
        if (_this.modifiers.brown) {
          point.classList.add('brown');
        }
        if (_this.modifiers.grey) {
          point.classList.add('grey');
        }
        if (_this.modifiers.white) {
          point.classList.add('white');
        }

        _this.el.appendChild(point);
        // 3. remove ugly point
        point.addEventListener('animationend', function (e) {
          if (point.parentNode) {
            point.parentNode.removeChild(point);
          }
          // callback after
          if (typeof rippleOptions.after === 'function') {
            rippleOptions.after();
          }
        });
      };
      if (rippleOptions.trigger && rippleOptions.trigger.target && document.querySelector(rippleOptions.trigger.target) === this.el) {
        this.el.addEventListener(rippleOptions.trigger.event, this.handler);
      } else {
        this.el.addEventListener('click', this.handler);
      }
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

plugin.version = '0.0.6';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;