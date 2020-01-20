# Universal Storage Helper

Universal storage helper for Nuxt projects with tweaks to facilitate use with older browsers.

The project is based on the equivalent [nuxt community module](https://github.com/nuxt-community/universal-storage-module).


## Installation

1. `npm i --save @headbright/hb-universal-storage`

1. Create a nuxt plugin and inject the storage helper so it is available for use in other parts of the application via this.$storage.

`plugins/universal-storage.js`:

```
import Storage from "@headbright/hb-universal-storage";

export default function(ctx, inject) {
  const options = {
    vuex: {
      namespace: "storage"
    },
    cookie: {
      prefix: "",
      options: {
        path: "/"
      }
    },
    localStorage: {
      prefix: ""
    },
    ignoreExceptions: false
  };
  const storage = new Storage(ctx, options);
  ctx.$storage = storage;
  inject("storage", storage);
}
```

1. Register the new Nuxt plugin so it's executed as early as possible in the lifecycle of the app:

`nuxt.config.js`

```
plugins: [
    '@/plugins/universal-storage.js',
  ],
```

[Official Nuxt Docs](https://nuxtjs.org/guide/plugins/)
