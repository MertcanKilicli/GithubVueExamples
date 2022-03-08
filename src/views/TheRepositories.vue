<template>
  <div class="repo">
    <table class="table-responsive">
      <thead>
       <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Url</th>
        <th scope="col">Language</th>
        <th scope="col">Login</th>
       </tr>
      </thead>
       <tbody>
        <tr v-for="repo in repos" :key="repo.id">
        <td>{{repo.id}}</td>
        <td>{{repo.name}}</td>
        <td>{{repo.html_url}}</td>
        <td>{{repo.language}}</td>
        <td>{{repo.owner.login}}</td>
        </tr>
       </tbody>
    </table>
  </div>
</template>
<script>

import axios from "axios";

export default {
  name: "TheRepositories",
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
