/*
 * @Author: your name
 * @Date: 2020-09-18 15:56:06
 * @LastEditTime: 2020-09-23 15:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\services\index.js
 */
import {
    getData
} from './request'
export default async (store) => {
    const consName = store.state.consName,
        field = store.state.field,
        data = await getData(consName, field);
    console.log(data)
    if (data.error_code) {
        store.commit('setErrorCode', data.error_code);
        return
    }
    store.commit('setData', data)
}