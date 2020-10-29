<!--
 * @Author: your name
 * @Date: 2020-09-18 15:58:16
 * @LastEditTime: 2020-09-23 15:01:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\views\Week.vue
-->

<template>
  <div class="container">
    <cons-card :name="weekData.name" :allIndex="Number(weekData.all)"></cons-card>
    <week-list :data="weekData"></week-list>
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from "vue";
import { useStore } from "vuex";

import getData from "@/services";

import WeekList from "@/components/List/week";
export default {
  name: "WeekPage",
  components: {
    WeekList,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      status = ref("");
    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });
    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });
    return {
      weekData: computed(() => state.week),
    };
  },
};
</script>
<style lang='scss' scoped>
</style>