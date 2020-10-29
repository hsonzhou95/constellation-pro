<!--
 * @Author: your name
 * @Date: 2020-09-21 16:14:41
 * @LastEditTime: 2020-09-22 14:29:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\NavBar\item.vue
-->
<template>
  <div class="nav-item" :data-index="index">{{item}}</div>
</template>

<script>
export default {
  name: "item",
  props: {
    item: String,
    index: Number,
  },
};
</script>
<style lang='scss' scoped>
.nav-item {
  width: 0.8rem;
  height: 100%;
  font-size: 0.14rem;
  line-height: 0.38rem;
  text-align: center;
  color: #666;

  &.nav-current {
    color: #db7093;
    font-weight: bold;
  }
}
</style>