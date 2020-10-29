<!--
 * @Author: your name
 * @Date: 2020-09-21 15:17:04
 * @LastEditTime: 2020-09-21 15:19:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constellation-pro\src\components\tab\icon.vue
-->
<template>
  <router-link :to="path" class="tab-icon">
    <i class="icon">{{iconText}}</i>
    <p class="text">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: "icon",
  props: {
    path: String,
    iconText: String,
  },
};
</script>
<style lang='scss' scoped>
.tab-icon {
  display: inline-block;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: #ddd;
    color: #999;
    font-size: 0.12rem;
    transition: all 0.5s;
  }

  .text {
    font-size: 0.12rem;
    text-align: center;
    margin-top: 0.02rem;
    color: #999;
    transition: color 0.5s;
  }

  &.router-link-active {
    .icon {
      background-color: #db7093;
      color: #fff;
    }

    .text {
      color: #db7093;
    }
  }
}
</style>