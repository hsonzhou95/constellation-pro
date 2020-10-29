/*
 * @Author: your name
 * @Date: 2020-09-18 16:03:07
 * @LastEditTime: 2020-09-21 15:15:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\store\mutations.js
 */
export default {
    setConsName(state, consName) {
        state.consName = consName;
    },
    setField(state, field) {
        state.field = field;
    },
    setErrorCode(state, errorCode) {
        state.errorCode = errorCode;
    },
    setData(state, data) {
        state[state.field] = data;
    }
}