<!--
 * @Author: your name
 * @Date: 2020-09-23 14:35:49
 * @LastEditTime: 2020-09-23 14:45:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\List\year.vue
-->
<template>
  <div class="list">
    <cons-item title="所在年份" :content="data.year"></cons-item>
    <cons-item title="幸运石头" :content="data.luckeyStone"></cons-item>
    <sum-mary field="健康" :content="data.health &&data.health[0]"></sum-mary>
    <sum-mary field="工作" :content="data.career && data.career[0]"></sum-mary>
    <sum-mary field="爱情" :content="data.love &&data.love[0]"></sum-mary>
    <sum-mary field="财运" :content="data.finance &&data.finance[0]"></sum-mary>
    <sum-mary field="本年" :content="data.mima &&`${data.mima.info}。${data.mima.text[0]}`"></sum-mary>
  </div>
</template>

<script>
export default {
  name: "YearList",
  props: {
    data: Object,
  },
};
</script>
<style lang='scss' scoped>
</style>