<template>
  <el-form
    class="newform"
    :model="ruleForm1"
    ref="ruleForm1"
    v-model="valid"
    lazy-validation
    style="margin-top:10%;"
  >
    <v-text-field
      color="green"
      :value="'Name: ' + dataProject.dataname"
      disabled
    ></v-text-field>
    <v-checkbox :disabled="read" v-model="dataProject.datapublic" label="Public project" style="margin-top:15%;"></v-checkbox>
  </el-form>
</template>

<script>
import { APIService } from "../APIService";
const apiService = new APIService();

export default {
  name: "project",
  data() {
    return {
      valid: true,
      read: true,
      ruleForm1: {
        project_name: "",
        public: ""
      },
      dataProject: {
        dataname: "",
        datapublic: ""
      }
    };
  },
  mounted() {
    apiService.getProject(this.$route.params.id).then(result => {
      if (result.data != null) {
        this.dataProject.dataname = result.data.name;
        if (result.data.public) this.dataProject.datapublic = true;
        else this.dataProject.datapublic = false;
      } 
      else this.dataProject = [{ dataname: null, datapublic: null }];
    });
  }
};
</script>
