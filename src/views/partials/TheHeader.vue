<template>
  <div>
    <nav>
      <router-link to="/">Overviews</router-link>
      <router-link to="/repo">Repositories</router-link>
    </nav>
    <RouterLink to="/">Github Icon</RouterLink>
    <router-link to="/">
      <AccountAvatar
        picture="@/assets/profile-picture.jpeg"
        size="100"
      ></AccountAvatar>
    </router-link>
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
