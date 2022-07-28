<script setup lang='ts'>
export default {
  data() {
    return {
      greeting: "Hi123",
    };
  },
};
</script>

<template>
  <div class="message">{{ greeting }}</div>
</template>

<style lang="scss">
@import "./styles.scss";
</style>