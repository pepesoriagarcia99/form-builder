<template>
  <div class="form">
    <Row v-for="(item, index) in data.items" :key="index" :row="item" />
  </div>
</template>
<script>
import Row from "../molecules/Row.vue";

export default {
  name: "FormBuilder",
  component: {
    Row,
  },
  components: { Row },
  props: {
    /** Input form */
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    validate() {},
    submit() {},
    change() {},
  },
};
</script>
<style scoped>
.form {
  width: 100%;
}
</style>
