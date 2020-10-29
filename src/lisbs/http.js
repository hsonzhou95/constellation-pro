/*
 * @Author: your name
 * @Date: 2020-09-18 15:55:22
 * @LastEditTime: 2020-09-22 15:17:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * 
 * @FilePath: \constellation-pro\src\lisbs\http.js
 */
import axios from 'axios';
import {
    JUHE_APPKEY
} from '@/configs/keys'

function getAxios(options) {
    axios(options.url + '&key=' + JUHE_APPKEY).then((res) => {
        options.success(res.data)
    }, (err) => {
        options.error(err)
    })
}
export {
    getAxios
}