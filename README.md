# vuey

> personal collection of components

## Usage

Currently there is only the `ripple` directive availaible.

### ripple directive

You can check the specification [here](https://github.com/YerkoPalma/vuey/issues/1). First of all include the plugin.

```javascript
import Vue from 'vue'
import vuey from 'vuey'

Vue.use(vuey)
```

And add the stylesheet

```html
<link rel="stylesheet" type="text/css" id="vuey" href="node_modules/vuey/dist/vuey.min.css">
```

Now the directive is ready to use with its default values

```vue
<template>
<button v-ripple></button>
</template>
```

Or you can customize any of the default options availaibles

```vue
<template>
<button></button>
</template>
<script>
export default {
  ripple: {
    color: '#e3e3e3',
    speed: 2
  }
}
</script>
```

Those options will modify all the `ripple` directives, you can use modifiers for specific animations on specific elements

```vue
<template>
<button v-ripple.blue></button>
</template>
```
## Contribution
- Fork it !
- Create your top branch from `dev`: `git branch my-new-topic origin/dev`
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
- Submit a pull request to `dev` branch of `YerkoPalma/vuey` repository !

## License

[MIT](http://opensource.org/licenses/MIT)
