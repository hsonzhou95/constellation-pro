/*
 * @Author: your name
 * @Date: 2020-09-22 14:55:34
 * @LastEditTime: 2020-09-22 16:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings E
 * @FilePath: \constellation-pro\src\components\common\index.js
 */
import ConsCard from '@/components/common/Card';
import ConsItem from '@/components/common/ConsItem';
import SumMary from '@/components/common/Summary'

let MyPlugin = {};
MyPlugin.install = function (Vue) {
    console.log(Vue);
    Vue.component(ConsCard.name, ConsCard)
    Vue.component(ConsItem.name, ConsItem)
    Vue.component(SumMary.name, SumMary)
}
export default MyPlugin