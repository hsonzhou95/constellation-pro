<!--
 * @Author: your name
 * @Date: 2020-09-21 15:16:59
 * @LastEditTime: 2020-09-21 16:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\tab\index.vue
-->
<template>
  <div class="tab">
    <div class="tab-item" v-for="(item,index) in tabData" :key="index">
      <tab-icon :iconText="item.iconText" :path="item.path">{{item.tabText}}</tab-icon>
    </div>
  </div>
</template>
 
<script>
import TabIcon from "./icon";

import tabData from "@/datas/tab";

import { reactive, toRefs } from "vue";

export default {
  name: "index",
  components: {
    TabIcon,
  },
  setup() {
    const state = reactive({
      tabData,
    });
    console.log(state);
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang='scss' scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}
</style>