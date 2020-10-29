<!--
 * @Author: your name
 * @Date: 2020-09-22 16:14:09
 * @LastEditTime: 2020-09-22 16:29:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\List\toDay.vue
-->
<template>
  <div class="list">
    <cons-item title="今日日期" :content="data.datetime"></cons-item>
    <cons-item title="速配星座" :content="data.QFriend"></cons-item>
    <cons-item title="幸运颜色" :content="data.color"></cons-item>
    <cons-item title="幸运数字" :content="data.number"></cons-item>
    <sum-mary field="今日" :content="data.summary"></sum-mary>
  </div>
</template>

<script>
export default {
  name: "todayList",
  props: {
    data: Object,
  },
};
</script>
<style lang='scss' scoped>
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>