<template>
  <div class="text">
    <input
      v-model="value"
      :type="input.type"
    >
  </div>
</template>
<script>
export default {
  name: "Text",
  props: {
    /** Input */
    input: {
      type: Object,
      default: () => ({

      }),
    },
  },
  data() {
    return {
      value: null,
    };
  },
  methods: {},
};
</script>
<style scoped>
.text {
  width: 100%;
}
</style>
