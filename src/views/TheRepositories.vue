<template>
  <div class="row" style="width:20rem">
    <div class="flex-column">
    <table class="table-responsive-sm">
      <thead>
       <tr>
        <th scope="col">Name</th>
        <th scope="col">Url</th>
        <th scope="col">Language</th>
        <th scope="col">Login</th>
       </tr>
      </thead>
       <tbody>
        <tr scope="row" v-for="repo in repos" :key="repo.id">
        <td>{{repo.name}}</td>
        <td>{{repo.html_url}}</td>
        <td>{{repo.language}}</td>
        <td>{{repo.owner.login}}</td>
        </tr>
       </tbody>
    </table>
    </div>
  </div>
</template>
<script>

import axios from "axios";

export default {
  name: "TheRepositories",
  props: {},
  data() {
    return {
      repos: null,
    }
  },
  created: function() {
    axios.get('https://api.github.com/users/MertcanKilicli/repos').then((response) => {
      this.repos= response.data;
    })
  },
  components: {}
};
</script>
