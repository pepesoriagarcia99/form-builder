<template>
  <div class="main">
    <h1>Formulario test</h1>
    <Form :data="data" />
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
};
</script>

<style>
.main {
  width: 100%;
}
</style>
