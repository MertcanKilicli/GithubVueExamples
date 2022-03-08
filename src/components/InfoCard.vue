<template>
  <div>
    <p>{{avatarUrl}}</p>
    <p>{{login}}</p>
    <h1>{{url}}</h1>
    <h1>{{name}}</h1>
    <h1>{{location}}</h1>
    <h1>{{bio}}</h1>
    <h1>{{twitterUsername}}</h1>
    <h1>{{followers}}</h1>
    <h1>{{following}}</h1>
    <AccountAvatar picture="image>" size="big"></AccountAvatar>
  </div>
</template>


<script>
import AccountAvatar from "@/components/AccountAvatar";

export default {
  name: "InfoCard",
  components: {
    AccountAvatar,
  },
  props: {
    avatarUrl: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    twitterUsername: {
      type: String,
      required: true,
    },
    followers: {
      type: Number,
      required: true,
      default: 1,
    },
    following: {
      type: Number,
      required: true,
      default: 10,
    }
  }
};
</script>

<style scoped>

</style>