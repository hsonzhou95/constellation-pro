<!--
 * @Author: your name
 * @Date: 2020-09-22 16:31:12
 * @LastEditTime: 2020-09-22 16:49:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\List\tomorrow.vue
-->
<template>
  <div class="list">
    <cons-item title="明日日期" :content="data.datetime"></cons-item>
    <cons-item title="速配星座" :content="data.QFriend"></cons-item>
    <cons-item title="幸运颜色" :content="data.color"></cons-item>
    <cons-item title="幸运数字" :content="data.number"></cons-item>
    <sum-mary field="明日" :content="data.summary"></sum-mary>
  </div>
</template>

<script>
export default {
  name: "TomrrowList",
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