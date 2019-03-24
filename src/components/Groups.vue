<template>
  <v-app>
    <div>
      <div class="landing-page">
        <h1>Browse all your groups</h1>
      </div>
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <div class="resultContainer">
              <v-layout align-center justify-center row>
                <div class="item elevation-5" v-for="group in groups" :key="group.name"> {{ group.name }}</div>
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
      groups: []
    };
  },
  mounted () {
      apiService.MyHomeGroups().then(result => {
        this.groups = result.data;
      });
    },
  methods: {
  }
};
</script>
