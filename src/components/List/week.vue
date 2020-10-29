<!--
 * @Author: your name
 * @Date: 2020-09-22 16:42:09
 * @LastEditTime: 2020-09-22 16:49:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\List\week.vue
-->
<template>
  <div class="list">
    <cons-item title="本周日期" :content="data.date"></cons-item>
    <sum-mary field="工作" :content="data.work"></sum-mary>
    <sum-mary field="学业" :content="data.job"></sum-mary>
    <sum-mary field="恋爱" :content="data.love"></sum-mary>
    <sum-mary field="财运" :content="data.money"></sum-mary>
  </div>
</template>

<script>
export default {
  name: "WeekList",
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