import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';

import './plugins/bootstrap-vue';
import App from './App.vue';

const axios = require('axios');

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$apiUrl = 'https://tabletop-api.alessandropietrantonio.it/api';

import _ from 'lodash';    
Object.defineProperty(Vue.prototype, '$_', { value: _ });

new Vue({
	router,
    render: (h) => h(App),
}).$mount('#app');
