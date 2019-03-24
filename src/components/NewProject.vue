<template>
  <el-form class="newform" :model="ruleForm1" :rules="namesRules" ref="ruleForm1" v-model="valid" lazy-validation style="margin-top:10%;">
    <v-text-field
      color="green"
      v-model="ruleForm1.project_name"
      :counter="15"
      label="Name"
      required
    ></v-text-field>
    <v-checkbox v-model="ruleForm1.public" label="Create a public project" style="margin-top:10%;"></v-checkbox>

    <v-btn
      @click="create('ruleForm1')"
      class="white--text"
      color="green"
      :disabled="!valid"
      style="margin-top:10%;"
    >Create project</v-btn>
  </el-form>
</template>

<script>
import { APIService } from "../APIService";
const apiService = new APIService();

export default {
  name: "newproject",
  checkbox: false,
  data() {
    return {
      valid: true,
      namesRules: {
        project_name: [
          v => !!v || "Name is required",
          v => (v && v.length <= 10) || "Name must be less than 15 characters"
        ]
      },
      ruleForm1: {
        project_name: "",
        public: ""
      }
    };
  },
  methods: {
    create(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var info = {
            project_name: this.ruleForm1.project_name,
            public: this.ruleForm1.public
          };
          apiService.newProject(info).then(result => {
            if (result.data.success) {
              this.$router.push({ name: 'project', params: { id: result.data.uri }})
            }
          });
        }
      });
    }
  }
};
</script>
