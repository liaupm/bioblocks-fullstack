<template>
  <v-app>
    <div>
      <div class="landing-page">
        <h1>Browse all your projects</h1>
      </div>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <div class="resultContainer">
              <v-layout align-center justify-center row>
                <div class="item elevation-5" v-for="project in projects" :key="project.name"> {{ project.name }}</div>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import { APIService } from "../APIService";
const apiService = new APIService();

export default {
  name: "login",
  data() {
    return {
      projects: []
    };
  },
  mounted () {
      apiService.MyHomeProjects().then(result => {
        this.projects = result.data;
      });
    },
  methods: {
  }
};
</script>