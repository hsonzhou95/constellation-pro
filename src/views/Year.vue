<!--
 * @Author: your name
 * @Date: 2020-09-18 15:58:28
 * @LastEditTime: 2020-09-23 15:01:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\views\Year.vue
-->
<template>
  <div class="container">
    <cons-card :name="yearData.name" :allIndex="yearData.all"></cons-card>
    <year-list :data="yearData"></year-list>
  </div>
</template>

<script>
import YearList from "@/components/List/year";

import { onMounted, computed, ref, onActivated } from "vue";
import { useStore } from "vuex";

import getData from "@/services";

export default {
  name: "YearPage",
  components: {
    YearList,
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
      yearData: computed(() => state.year),
    };
  },
};
</script>
<style lang='scss' scoped>
</style>