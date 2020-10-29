<!--
 * @Author: your name
 * @Date: 2020-09-23 14:25:17
 * @LastEditTime: 2020-09-23 14:30:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\List\month.vue
-->
<template>
  <div class="list">
    <sum-mary field="健康" :content="data.health"></sum-mary>
    <sum-mary field="工作" :content="data.work"></sum-mary>
    <sum-mary field="爱情" :content="data.love"></sum-mary>
    <sum-mary field="财运" :content="data.money"></sum-mary>
    <sum-mary field="本月总结" :content="data.all"></sum-mary>
  </div>
</template>

<script>
export default {
  name: "MonthList",
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