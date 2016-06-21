/* @flow */

export default function (Vue: any) {
  Vue.directive('ripple', {
    bind () {
      this.handler = e => {
        this.el.classList.add('has-ripple')
        const rect = this.el.getBoundingClientRect()
        const x = e.pageX - (rect.left + document.body.scrollLeft)
        const y = e.pageY - (rect.top + document.body.scrollTop)
        const point: HTMLSpanElement = document.createElement('span')
        point.classList.add('point')
        point.style.top = `${y}px`
        point.style.left = `${x}px`
        this.el.appendChild(point)

        // 2. expand effect on point
        // size
        if (this.modifiers.small) {
          point.classList.add('small')
        }
        if (this.modifiers.large) {
          point.classList.add('large')
        }
        if (this.modifiers.xsmall) {
          point.classList.add('xsmall')
        }
        if (this.modifiers.xlarge) {
          point.classList.add('xlarge')
        }
        // speed
        if (this.modifiers.slow) {
          point.classList.add('slow')
        }
        if (this.modifiers.fast) {
          point.classList.add('fast')
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
