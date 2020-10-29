<!--
 * @Author: your name
 * @Date: 2020-09-18 15:56:49
 * @LastEditTime: 2020-09-23 15:14:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\views\ToDay.vue
-->
<template>
  <div class="container">
    <ConsCard :name="todayData.name" :allIndex="todayData.all || 1" />
    <num-list :data="todayData"></num-list>
    <cons-list :data="todayData"></cons-list>
  </div>
</template>

<script>
import ConsCard from "@/components/common/Card";
import NumList from "@/components/NumList";
import ConsList from "@/components/List/toDay";

import getData from "@/services";

import { onMounted, computed, ref, onActivated } from "vue";
import { useStore } from "vuex";

export default {
  name: "TodayPage",
  components: {
    ConsCard,
    NumList,
    ConsList,
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
      todayData: computed(() => state.today),
    };
  },
};
</script>
<style lang='scss' scoped>
</style>