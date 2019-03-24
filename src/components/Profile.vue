<template>
  <v-app>
    <div>
      <div class="landing-page">
        <h1>A new way to program, easy, simple and intuitive</h1>
        <span
          class="landing-text-big"
        >With Bioblocks you will program with visual blocks, without needing to know code</span>
        <span></span>
      </div>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <div class="resultContainer">
                <h1>My recent projects</h1>
              <v-layout align-center justify-center row>
                <div class="item elevation-5" v-for="project in projects" :key="project.id"> {{ project.name }}</div>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <div class="resultContainer">
                <h1>My recent groups</h1>
              <v-layout align-center justify-center row>
                <div class="item elevation-5" v-for="group in groups" :key="group.id"> {{ groups }}</div>
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
      projects: [],
      groups: []
    };
  },
  mounted () {
      apiService.MyHomeProjects().then(result => {
        this.projects = result.data;
      });
      apiService.MyHomeGroups().then(result => {
        this.groups = result.data;
      });
    },
  methods: {
  }
};
</script>
