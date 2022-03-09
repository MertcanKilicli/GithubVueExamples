<template>
  <div>
    <div class="card-header" style="width: 20rem;">
        <AccountAvatar picture="image" size="big">
        </AccountAvatar>
      <div class="card-body">
        <h5 class="card-title">{{name}}</h5>
        <p class="card-text">{{login}}</p>
      </div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">{{bio}}</li>
        <li class="list-group-item">{{followers}} followers {{following}} following</li>
        <li class="list-group-item">{{location}}</li>
       </ul>
      <div class="card-body">
         <a href="https://twitter.com/mertcankiliclii" class="card-link">{{twitterUsername}}</a>
      </div>
    </div>
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
    avatar: {
      type: String,
      required: null,
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