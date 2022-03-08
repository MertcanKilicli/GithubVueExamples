<template>
  <div id="app">
    <TheHeader></TheHeader>
    <div class="row">
      <div class="col-4">
        <InfoCard avatar-url=""
                  :bio="user.bio"
                  :followers="user.followers"
                  :following="user.following"
                  :location="user.location"
                  :login="user.login"
                  :name="user.name"
                  :twitter-username="user.twitter_username"
                  :url="user.url">
        </InfoCard>
      </div>
      <div class="col-8">
        <NavTabs></NavTabs>
        <Overview></Overview>
      </div>
  </div>
    <router-view></router-view>
  </div>
</template>
<script>
import TheHeader from "@/views/partials/TheHeader";
import NavTabs from "@/views/partials/NavTabs";
import InfoCard from "@/components/InfoCard";
import axios from "axios";
import Overview from "@/views/Overview";


export default {
  data() {
    return {
      user: null
    };
  },
  created: function() {
    axios.get("https://api.github.com/users/MertcanKilicli").then((response) => {
      this.user = response.data;
      console.log(response.data);
    });
  },
  components: {
    NavTabs,
    TheHeader,
    InfoCard,
    Overview
  }
};
</script>

<style>
@font-face {
  font-family: "DejaVu Sans Mono-Bold";
  src: url("./assets/fonts/DejaVuSansMono-Bold.ttf");
}
#app {
  font-family: "DejaVu Sans Mono-Bold", ui-serif;
  color: #0d1117;
  font-weight: bold;
}
</style>
