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
      :value="'Name: ' + dataGroup.dataname"
      disabled
    ></v-text-field>
  </el-form>
</template>

<script>
import { APIService } from "../APIService";
const apiService = new APIService();

export default {
  name: "group",
  data() {
    return {
      valid: true,
      read: true,
      ruleForm1: {
        project_name: ""
      },
      dataGroup: {
        dataname: ""
      }
    };
  },
  mounted() {
    apiService.getGroup(this.$route.params.id).then(result => {
        console.log(result.data)
      if (result.data != null)
        this.dataGroup.dataname = result.data.name;
      else this.dataGroup = [{ dataname: null }];
    });
  }
};
</script>
