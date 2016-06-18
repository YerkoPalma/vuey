/* @flow */
import { createStyleSheet, addCssRule, addKeyframeAnimation } from './util'

export default function (Vue) {
  const init = Vue.prototype._init
  Vue.prototype._init = function (options) {
    // create default classes
    const hasRipple: Object = {
      overflow: 'hidden',
      'user-select': 'none'
    }
    const point: Object = {
      position: 'absolute',
      'background-color': '#000000',
      transition: 'all 0.5s',
      width: '2px',
      height: '2px',
      'border-radius': '999px',
      overflow: 'hidden'
    }
    const rippleAnimation: Object = {
      from: `
        transform: scale(1);
        opacity: 0.4;`,
      to: `
        transform: scale(100);
        opacity: 0;`
    }
  }

  const destroy = Vue.prototype._destroy
  Vue.prototype._destroy = function () {

  }
}
