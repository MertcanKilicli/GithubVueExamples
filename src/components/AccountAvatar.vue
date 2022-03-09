<template>
  <div>
    <img class="img-thumbnail" :src="picture" :width="size"  alt=""/>
  </div>
</template>

<script>
export default {
  name: "AccountAvatar",
  props: {
    size: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
