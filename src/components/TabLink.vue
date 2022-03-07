<template>
  <div>
    <router-link :to="link">{{title}}</router-link>
    <i class="bi bi-app"></i>
  </div>
</template>
<script>



export default {
  name: "TabLink",
  components: {
  },
  props: {
    link: {
      type: String,
      required: true,
    },
    Symbols: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  }
};
</script>

<style scoped>

</style>