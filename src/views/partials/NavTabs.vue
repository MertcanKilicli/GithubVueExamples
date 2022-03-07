<template>
  <div>
    <TabLink link="/" symbols="" title="Overview"></TabLink>
    <TabLink link="/repo" symbols="" title="Repositories"> </TabLink>
    <TabLink link="/" symbols="" title="Projects"> </TabLink>
    <TabLink link="/" symbols="" title="Packages"> </TabLink>
    <TabLink link="/" symbols="" title="Stars"> </TabLink>
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