<template>
  <div class="number">
    <input
      v-model="value"
      :type="input.type"
    >
  </div>
</template>
<script>
export default {
  name: "Number",
  props: {
    /** Input */
    input: {
      type: Object,
      default: () => ({      }),
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
.number {
  width: 100%;
}
</style>
