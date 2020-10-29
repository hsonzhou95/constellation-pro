
<template>
  <div class="container">
    <cons-card :name="tomorrowData.name" :allIndex="tomorrowData.all"></cons-card>
    <tomrrow-list :data="tomorrowData"></tomrrow-list>
  </div>
</template>

<script>
import { onMounted, computed, ref, onActivated } from "vue";
import { useStore } from "vuex";

import getData from "@/services";

import TomrrowList from "@/components/List/tomorrow";
export default {
  name: "TomorrowPage",
  components: {
    TomrrowList,
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
      tomorrowData: computed(() => state.tomorrow),
    };
  },
};
</script>
<style lang='scss' scoped>
</style>