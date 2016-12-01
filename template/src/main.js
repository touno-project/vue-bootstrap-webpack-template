{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#element}}
import ElementUI from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import locale from 'element-ui/lib/locale/lang/en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import '../theme/index.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/element}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#element}}
Vue.use(ElementUI, { locale }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/element}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
