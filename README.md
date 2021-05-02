# py4web_spa_blog
This blog application is rebuilt from https://github.com/agavgavi/py4web-blog-app in SPA manner using [vue3pyj](https://github.com/valq7711/vue3pyj) and [RapydScript](https://github.com/atsepkov/RapydScript).

All SPA source code is in `vuepy` folder. Here is the structure:
```
/vuepy
    /app_components  # application specific vue-components
    /asset           # common helpers classes/utilities (not app-specific)
    /components      # base vue-components
    /directives      # vue-directives
    /pages           # top level application vue-components to which URLs are mapped
    /store           # application store (holds app-state, performs backend communication) - similar to vuex
    app.vuepy        # top level application vue-component
    common.pyj       # similar to common.py
    index.vuepy      # application top level "main" page: index.html + index.js 
    models.pyj       # similar to models.py
    routes.pyj       # vue-router loader
    server.pyj       # wrapper around axios
    setup.pyj        # 
    xtools.pyj       # provides a set of utilities (like a modal dialog) mounted as Vue.prototype.$x
```


