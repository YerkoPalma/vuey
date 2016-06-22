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
        point.classList.add('ripple-effect')

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
        // colors
        if (this.modifiers.black) {
          point.classList.add('black')
        }
        if (this.modifiers.red) {
          point.classList.add('red')
        }
        if (this.modifiers.pink) {
          point.classList.add('pink')
        }
        if (this.modifiers.purple) {
          point.classList.add('purple')
        }
        if (this.modifiers.indigo) {
          point.classList.add('indigo')
        }
        if (this.modifiers.blue) {
          point.classList.add('blue')
        }
        if (this.modifiers.cyan) {
          point.classList.add('cyan')
        }
        if (this.modifiers.teal) {
          point.classList.add('teal')
        }
        if (this.modifiers.green) {
          point.classList.add('green')
        }
        if (this.modifiers.lime) {
          point.classList.add('lime')
        }
        if (this.modifiers.yellow) {
          point.classList.add('yellow')
        }
        if (this.modifiers.amber) {
          point.classList.add('amber')
        }
        if (this.modifiers.orange) {
          point.classList.add('orange')
        }
        if (this.modifiers.brown) {
          point.classList.add('brown')
        }
        if (this.modifiers.grey) {
          point.classList.add('grey')
        }
        if (this.modifiers.white) {
          point.classList.add('white')
        }

        this.el.appendChild(point)
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
