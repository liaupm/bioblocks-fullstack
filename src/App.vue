<template>
  <v-app id="app">
    <v-toolbar dark color="green" v-if="LoggedIn">

      <v-dialog v-model="dialog" width="640">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>apps</v-icon>
          </v-btn>
        </template>
        <v-card style="height:400px;">
          <v-container fluid>
            <v-layout column>
              <v-flex xs12>
                <div class="homeContainer">
                  <v-layout align-center justify-center row>
                    <v-tab :to="'/newproject'" @click="dialog = false">
                      <div class="homeItem elevation-5">
                        <h1 style="margin-top:30%; color:black;">New project</h1>
                      </div>
                    </v-tab>
                    <v-tab :to="'/newgroup'" @click="dialog = false">
                    <div class="homeItem elevation-5">
                      <h1 style="margin-top:30%; color:black;">New group</h1>
                    </div>
                    </v-tab>
                  </v-layout>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-dialog>

      <v-toolbar-title>
        <v-list-tile :to="items[0].path">
          <div class="white--text" style="font-size: 22px;">Bioblocks</div>
        </v-list-tile>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        color="#000"
        placeholder="Search a project"
        clearable
        append-outer-icon="search"
        style="margin-right:5%;"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-menu :nudge-width="100" offset-y>
        <template v-slot:activator="{ on }">
          <v-toolbar-title v-on="on">
            <v-btn icon>
              <v-icon>account_circle</v-icon>
            </v-btn>
          </v-toolbar-title>
        </template>
        <v-list>
          <v-list-tile>
            <v-list-tile-title v-text="name"></v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
            <v-list-tile-title>
              <div class="menu-items">{{ item.title }}</div>
            </v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile :key="logout.title" @click="logOut()">
            <v-list-tile-title>
              <div class="menu-items">{{ logout.title }}</div>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { APIService } from "./APIService";
const apiService = new APIService();
//import TodoBio from './components/TodoBio';

export default {
  name: "app",
  components: {},
  data() {
    return {
      LoggedIn: "",
      name: "",
      items: [
        { title: "Profile", path: "/profile" },
        { title: "Projects", path: "/projects" },
        { title: "Groups", path: "/groups" }
      ],
      logout: { title: "Logout" },
      dialog: false
    };
  },
  mounted() {
    apiService.isLoggedIn().then(result => {
      console.log(result.data.success)
      this.LoggedIn = result.data.success;
      this.name = "@" + result.data.name;
    });
  },
  methods: {
    logOut() {
      apiService.logOut().then(result => {
        if (result.data.success)
          this.$router.go("/login");
    });
    }
  }
};
</script>

<style>
/*#app {
font-family: "Avenir", Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}*/
.container {
  max-width: 300px;
  margin: 0 auto;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*font-size: 24px;*/
  height: 100vh;
  text-align: center;
}
.flex-center {
  display: flex;
  justify-content: center;
}
.menu-items {
  font-weight: bold;
  color: #2c3e50;
}
.nav ul {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
  background: #ffffff;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 24px;
}

.nav a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}
.form-log-reg {
  padding-top: 20px;
  padding-left: 60px;
}
.form-log-reg a {
  margin: 0;
  padding: 0;
  border: 0;
  color: #606266;
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
}
.form-log-reg a:hover {
  text-decoration: underline;
}

/*logo*/
.nav-logo {
  display: inline-block;
  margin-left: -36rem;
  width: 70px;
}
.nav-logo img {
  display: block;
  width: 200%;
  height: auto;
  margin-left: -36rem;
}
/* Auth Pages*/
.login-border {
  margin: auto;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  position: relative;
  border-radius: 0.4em;
  width: 300px;
  padding-top: 3px;
}
.login-form {
  margin-top: 10%;
}
.login-width {
  width: 230px;
  margin: 0 auto;
  display: block;
}
.form-margin {
  margin-bottom: 11px;
}
/*LandingPage.vue*/
.landing-page {
}
.landing-page h1 {
  color: #688a2e;
  font-size: 50px;
  line-height: 50px;
  max-width: 650px;
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
}
.landing-text-big {
  max-width: 681px;
  opacity: 0.7;
  margin: 0 auto;
  display: block;
  text-align: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  cursor: default;
}
/*Profile.vue*/
.resultContainer {
  height: 300px;
}
.item {
  min-height: 200px;
  min-width: 300px;
  margin: 10px;
}
.homeContainer {
  margin-top: 10%;
  height: 290px;
}
.homeItem {
  min-height: 200px;
  min-width: 250px;
  margin: 5%;
  padding: 15px;
  text-align: center;
}
/*New project/group*/
.newform {
  margin: auto;
  background-color: #ffffff;
  position: relative;
  border-radius: 0.1em;
  width: 35%;
  height: 350px;
  padding: 3%;
}
</style>
