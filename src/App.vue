<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="container">
      <div class="row">
        <div class="col">
          <InfoCard></InfoCard>
        </div>
        <div class="col">
          <NavTabs></NavTabs>
        </div>
      </div>
    </div>
    <router-view></router-view>
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
  color: #0d1117
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
