/*
 * @Author: your name
 * @Date: 2020-09-21 17:02:16
 * @LastEditTime: 2020-09-22 14:36:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\directives\navCurrent.js
 */
export default {
    mounted(el, binding) {
        const {
            className,
            activeClass,
            curIdx
        } = binding.value,
            oNavItems = el.getElementsByClassName(className)
        oNavItems[curIdx].className += ` ${activeClass}`;
    },
    updated(el, binding) {
        const {
            className,
            activeClass,
            curIdx
        } = binding.value,
            oOptions = binding.oldValue,
            oNavItems = el.getElementsByClassName(className)
        oNavItems[curIdx].className += ` ${activeClass}`;
        oNavItems[oOptions.curIdx].className = className;
    },
}