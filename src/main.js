import './assets/base.css'
import './assets/main.css'
import 'nprogress/nprogress.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { auth } from './includes/firbase'
import App from './App.vue'
import router from './router'
import veeValidatePlugin from './includes/validation'
import i18n from './includes/i18n'
import Icon from './directives/icon'
import { registerSW } from 'virtual:pwa-register'

import progressBar from './includes/progressBar'

registerSW({ immediate: true })

progressBar(router)
let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(veeValidatePlugin)
    app.use(i18n)
    app.directive('icon', Icon)
    app.mount('#app')
  }
})
