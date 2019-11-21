/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

// import Vue from 'vue';
//
// import Vuetify from 'vuetify/lib';
//
// //Router information for Vue Router
// import Routes from './routes.js';
//
// //Component File
// import App from './views/App';
//
// Vue.use(Vuetify);
//
//     const app = new Vue({
//         el:'#app',
//         router:Routes,
//         render:h => h(App),
//     });
//
// export default app;

window.Vue = require('vue');

Vue.config.devtools = true;
Vue.config.performance = true;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './views/App';

const app = new Vue({
    el: '#app',
    components: {
        App
    },
    render: h => h(App)
});
