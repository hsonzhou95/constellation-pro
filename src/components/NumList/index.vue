<!--
 * @Author: your name
 * @Date: 2020-09-22 15:44:42
 * @LastEditTime: 2020-09-22 15:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\NumList\index.vue
-->
<template>
  <div class="num-list">
    <num-item v-for="(item,index) in NumData" :key="index" :item="item" :data="data"></num-item>
  </div>
</template>

<script>
import NumData from "@/datas/num";
import NumItem from "./item";
export default {
  name: "NumIdx",
  props: {
    data: Object,
  },
  components: {
    NumItem,
  },
  setup() {
    return {
      NumData,
    };
  },
};
</script>
<style lang='scss' scoped>
.num-list {
  display: flex;
  flex-direction: row;
  margin: 0.15rem 0;
  padding: 0.1rem;
  box-shadow: 0.02rem 0.02rem 0.05rem #999;
}
</style>