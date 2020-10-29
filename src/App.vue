<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <nav-bar></nav-bar>
    <error-tip></error-tip>
    <router-view v-slot="{Component}" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tabs />
  </div>
</template>
<script>
import MyHeader from "@/components/header";
import Tabs from "@/components/tab";
import NavBar from "@/components/NavBar";
import ErrorTip from "@/components/Error";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, watch } from "vue";

export default {
  name: "App",
  components: {
    MyHeader,
    Tabs,
    NavBar,
    ErrorTip,
  },
  setup() {
    const store = useStore(),
      router = useRouter();
    router.push("/");
    store.commit("setField", "today");
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (val) => {
        store.commit("setField", val);
      }
    );
    return {
      errorCode: computed(() => store.state.errorCode),
    };
  },
};
</script>
<style lang="scss">
</style>
