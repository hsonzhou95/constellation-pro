/*
 * @Author: your name
 * @Date: 2020-09-18 15:56:14
 * @LastEditTime: 2020-09-22 15:16:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\services\request.js
 */
import {
    getAxios
} from '@/lisbs/http.js'

function getData(consName, type) {
    return new Promise((resolve, reject) => {
        getAxios({
            url: `/api/constellation/getAll?consName=${consName}&type=${type}`,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}
export {
    getData
}