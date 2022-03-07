<template>
  <div id="app">
    <TheHeader></TheHeader>
    <NavTabs></NavTabs>
    <InfoCard></InfoCard>
  </div>
</template>
<script>
import TheHeader from "@/views/partials/TheHeader";
import NavTabs from "@/views/partials/NavTabs";
import InfoCard from "@/components/InfoCard";


export default {
  components: {
    NavTabs,
    TheHeader,
    InfoCard
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
