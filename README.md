# Universal Storage Helper

Universal storage helper for Nuxt projects with tweaks to facilitate use with older browsers.

The project is based on the equivalent [nuxt community module](https://github.com/nuxt-community/universal-storage-module).


## Installation

1. `npm i --save @headbright/hb-universal-storage`

1. Create a nuxt plugin:

```
import Storage from 'hb-universal-storage'

export default function(ctx, inject) {
  const options = {
    vuex: {
      namespace: 'storage'
    },
    cookie: {
      prefix: '',
      options: {
        path: '/'
      }
    },
    localStorage: {
      prefix: ''
    },
    ignoreExceptions: false
  }
  const storage = new Storage(ctx, options)
  ctx.$storage = storage
  inject('storage', storage)
}
```
