import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueFeather from 'vue-feather';
import App from './App.vue'
import "./assets/styles.css"

const app = createApp(App)

app.use(createPinia())
app.component(VueFeather.name, VueFeather);

app.mount('#app')
