<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/" alt="" width="30" height="24" class="d-inline-block align-text-top">
          Github
          <div class="AccountAvatar">
            <AccountAvatar
              picture="@/assets/profile-picture.jpeg"
              size="100">
            </AccountAvatar>
          </div>
        </a>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">/</button>
            </form>
          </div>
        </nav>
      </div>
    </nav>
  </div>

</template>
<script>
import AccountAvatar from "@/components/AccountAvatar";


export default {
  name: "TheHeader",
  components: {
    AccountAvatar
  },
  props: {}
};
</script>
<style scoped></style>
