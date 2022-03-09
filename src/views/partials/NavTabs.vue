<template>
  <div class="d-flex flex-row bd-highlight m-4 justify-content-center">
    <TabLink  link="/" symbols="" title="Overview"></TabLink>
    <TabLink link="/repo" symbols="" title="Repositories"> </TabLink>
  </div>
</template>

<script>
import TabLink from "@/components/TabLink";

export default {
  name: "NavTabs",
  components: {
    TabLink
  }
};
</script>

<style scoped>

</style>