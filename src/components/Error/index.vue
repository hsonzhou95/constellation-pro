<template>
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/error.png')" alt />
    <p>{{errorData[errorCode]}}</p>
  </div>
</template>

<script>
import errorData from "@/datas/error";

import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "ErrorTip",
  setup() {
    const store = useStore();

    return {
      errorData,
      errorCode: computed(() => store.state.errorCode),
    };
  },
};
</script>
<style lang='scss' scoped>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    width: 0.5rem;
  }

  p {
    margin-top: 0.15rem;
    font-size: 0.14rem;
    color: #999;
  }
}
</style>