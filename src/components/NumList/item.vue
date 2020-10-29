<!--
 * @Author: your name
 * @Date: 2020-09-22 15:44:48
 * @LastEditTime: 2020-09-22 16:01:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\NumList\item.vue
-->
<template>
  <div class="num-item" :style="`background:${item.bgColor}`">
    <h1>{{item.title}}</h1>
    <p>{{data[item.field] || 0}}</p>
  </div>
</template>

<script>
export default {
  name: "NumItem",
  props: {
    item: Object,
    data: Object,
  },
};
</script>
<style lang="scss" scoped>
.num-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.15rem 0;
  color: #666;

  h1 {
    font-size: 0.16rem;
  }

  p {
    font-size: 0.2rem;
    margin-top: 0.1rem;
  }
}
</style>