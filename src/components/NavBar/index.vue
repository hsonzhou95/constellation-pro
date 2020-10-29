<!--
 * @Author: your name
 * @Date: 2020-09-21 16:14:21
 * @LastEditTime: 2020-09-23 14:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\navbar\index.vue
-->

<template>
  <div
    class="nav-bar"
    v-nav-current="{
    className:'nav-item',
    activeClass:'nav-current',
    curIdx
    }"
    @click="navClick($event)"
  >
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width:${navData.length*.8}rem`">
        <nav-bar v-for="(item,index) in navData" :key="index" :index="index" :item="item">{{item}}</nav-bar>
      </div>
    </div>
  </div>
</template>

<script>
import navData from "@/datas/nav";
import NavBar from "./item";

import { ref } from "vue";
import { useStore } from "vuex";

import { navCurrent } from "@/directives";
import getData from "@/services";
export default {
  name: "index",
  components: {
    NavBar,
  },
  directives: {
    navCurrent,
  },
  setup() {
    const store = useStore();
    const curIdx = ref(0);
    const navClick = (e) => {
      const className = e.target.className;
      if (className === "nav-item") {
        let idx = e.target.dataset.index,
          consName = e.target.innerText;
        curIdx.value = idx;
        store.commit("setConsName", consName);
        getData(store);
      }
    };
    return {
      navData,
      curIdx,
      navClick,
    };
  },
};
</script>
<style lang='scss' scoped>
.nav-bar {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;

  .scroll-wrapper {
    height: 0.46rem;
    overflow-x: auto;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>