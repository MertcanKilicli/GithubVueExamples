<template>
  <div>
      <div class="container-fluid">
      <div class="row navbar navbar-dark bg-dark">
        <div class="col-1">
          <a class="navbar-brand"  href="#">
            <img src="@/assets/github.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          </a>
        </div>
        <div class="col-5">
          <div class="flex flex-row d-flex">
            <input class="form-control  mr-sm-2 flex-grow-1" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success flex-grow-0" type="submit">/</button>
          </div>
        </div>
        <div class="col-6" >
          <AccountAvatar class="float-end" picture="@/assets/profile-picture.jpeg" :size="500"></AccountAvatar>
        </div>
      </div>
      </div>
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
