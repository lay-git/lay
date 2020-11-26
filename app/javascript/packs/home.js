// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'home' %> to your layout
// Then add this markup to your html template:
//
// <div id='home'>
//   {{message}}
//   <app></app>
// </div>


import Vue from 'vue/dist/vue.esm'
import App from '../home.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheveronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheveronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#home',
    components: { App }
  })
})