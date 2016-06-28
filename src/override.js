/* @flow */

export default function (Vue: any) {
  const init = Vue.prototype._init
  Vue.prototype._init = function (options) {
    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')
    link.id = 'vuey'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = '/node_modules/vuey/dist/vuey.min.css'
    link.media = 'all'
    head.appendChild(link)
    init.call(this, options)
  }

  Vue.prototype._destroy = function () {

  }
}
