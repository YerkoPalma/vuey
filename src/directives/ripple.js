/* @flow */
import { createStyleSheet, addCssRule } from '../util.js'

export default function (Vue: any) {
  Vue.directive('ripple', {
  	bind () {
      this.handler = e => {
  			this.el.classList.add('has-ripple')
    		const width = parseInt(window.getComputedStyle(this.el,null).getPropertyValue('width').slice(0, -2))
        const height = parseInt(window.getComputedStyle(this.el,null).getPropertyValue('height').slice(0, -2))
        const rect = this.el.getBoundingClientRect()
        const x = e.pageX - (rect.left + document.body.scrollLeft)
        const y = e.pageY - (rect.top + document.body.scrollTop)
        let point: HTMLSpanElement = document.createElement('span')
        point.classList.add('point')
        if (this.modifiers.white) {
        	point.style['background-color'] = '#fff'
        } else {
        	point.style['background-color'] = this.vm.$options.ripple.color
        }
        point.style.top = `${y}px`
        point.style.left = `${x}px`
        this.el.appendChild(point)

        // 2. expand effect on point
        if (this.modifiers.small) {
        	point.classList.add('ripple-effect-small')
        } else {
        	point.classList.add('ripple-effect')
        }

        if (this.modifiers.slow) {
        	point.classList.add('slow')
        }

        // 3. remove ugly point
        point.addEventListener('animationend', function (e) {
          if (point.parentNode) {
            point.parentNode.removeChild(point)
          }
        })
      }
    	this.el.addEventListener('click', this.handler)
    },
    update (newValue, oldValue) {

    },
    unbind () {
    	this.el.removeEventListener('click', this.handler)
    }
  })
}
