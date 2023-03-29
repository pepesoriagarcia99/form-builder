<template>
  <div class="custom">
    <keep-alive>
      <component :is="input.component" @output="change" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Custom",
  props: {
    /** Input */
    input: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    change(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped>
.custom {
}
</style>