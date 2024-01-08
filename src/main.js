// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由
import store from './store/index.js';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app
  .use(store)
  .use(router) // 使用路由
  .use(Antd) // 使用 Ant Design Vue

app.mount('#app')
