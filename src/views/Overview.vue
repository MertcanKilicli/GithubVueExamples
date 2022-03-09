<template>
  <div class="card">
    <div class="card-body">
        <div class="row" v-for="repo in repos" :key="repo.id">
          <h5 class="card-title">{{repo.name}}</h5>
          <h5>{{repo.language}}</h5>
          <h5>{{repo.description}}</h5>
        </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "OverView",
  components: {
  },
  props: {},
  data() {
    return {
      repos: null
    }
  },
  created: function() {
    axios.get('https://api.github.com/users/MertcanKilicli/repos').then((response) => {
      this.repos = response.data;
    })
  },

};
</script>
