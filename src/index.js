/* @flow */
import override from './override'

function plugin (Vue: any, options: Object = {}) {
  override(Vue)
  
  Vue.prototype.$add = (a: number, b: number): number => {
    return a + b
  }
}

plugin.version = '1.3.0'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
