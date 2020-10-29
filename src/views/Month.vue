<!--
 * @Author: your name
 * @Date: 2020-09-18 15:58:22
 * @LastEditTime: 2020-09-23 14:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\views\Month.vue
-->

<template>
  <div class="container">
    <cons-card :name="monthData.name" :allIndex="Number(monthData.all)"></cons-card>
    <month-list :data="monthData"></month-list>
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from "vue";
import { useStore } from "vuex";

import ConsCard from "@/components/common/Card";
import MonthList from "@/components/List/month";

import getData from "@/services";

export default {
  name: "MonthPage",
  components: {
    ConsCard,
    MonthList,
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
      monthData: computed(() => state.month),
    };
  },
};
</script>
<style lang='scss' scoped>
</style>