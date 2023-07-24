import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "api-key",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')