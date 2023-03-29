<template>
  <div class="main">
    <Form :data="data" @submit="submit" @change="change"/>
  </div>
</template>

<script>
import Form from "./organism/Form.vue";
import { simple_form } from "../config/data";

export default {
  name: "MainView",
  components: {
    Form,
  },
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.data = simple_form;
  },
  methods: {
    submit(event){
      console.log('submit', event);
    },
    change(event){
      console.log('change', event);
    }
  }
};
</script>

<style>
.main {
  width: 100%;
}
</style>
