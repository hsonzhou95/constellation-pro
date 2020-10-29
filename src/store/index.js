/*
 * @Author: your name
 * @Date: 2020-09-18 15:10:21
 * @LastEditTime: 2020-09-18 16:04:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\store\index.js
 */
import Vuex from 'vuex'
import state from './state';
import mutations from './mutations'
export default Vuex.createStore({
  state: state,
  mutations: mutations,
});