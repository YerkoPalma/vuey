/* @flow */
import override from './override'
import ripple from './directives/ripple'

function plugin (Vue: any, options: Object = {}) {
  override(Vue)
  ripple(Vue)
}

plugin.version = '0.0.0'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
