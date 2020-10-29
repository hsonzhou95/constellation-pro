/*
 * @Author: your name
 * @Date: 2020-09-18 15:10:21
 * @LastEditTime: 2020-09-22 16:05:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\main.js
 */
import {
    createApp
} from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/resets.css';
import '@/assets/css/border.css';
import '@/assets/js/common.js';
import MyPlugin from '@/components/common'

createApp(App).use(router).use(store).use(MyPlugin).mount('#app')