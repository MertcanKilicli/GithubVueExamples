<template>
  <div class="card" style="width: 18rem;">
    <AccountAvatar class="card-img-top" picture="@/assets/profile-picture.jpeg"></AccountAvatar>
    <div class="card-body">
      <h4 class="card-big-title">Mertcan Kılıçlı</h4>
      <h5 class="card-little-title" position="left">Mertcan Kılıçlı</h5>
      <p class="card-id" position="left">Ankara University-Statistic</p>
    </div>
    <ul class="list-group list-group-flush">
      <button class="bi-menu-button-wide" color="black">Edit Profile</button>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Follower</a>
      <a href="#" class="card-link">Following</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>


<script>
import AccountAvatar from "@/components/AccountAvatar";

export default {
  name: "InfoCard",
  components: {
    AccountAvatar,
  }
};
</script>

<style scoped>

</style>