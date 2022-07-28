<script>
//  lang='ts' no work
export default {
  data() {
    return {
      greeting: "Hello, World!",
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