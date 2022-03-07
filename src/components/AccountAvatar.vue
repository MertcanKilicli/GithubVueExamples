<template>
  <div>
    <img class="image" :src="picture" :width="size" alt="picture" />
  </div>
</template>

<script>
export default {
  name: "AccountAvatar",
  props: {
    size: {
      type: Number,
      required: true,
      default: 100,
    },
    picture: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
