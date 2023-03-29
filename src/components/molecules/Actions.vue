<template>
  <div class="actions">
    <button @click="submit()">{{ actions.submit }}</button>
    <span class="space"></span>
    <button v-if="actions.reset" @click="reset()">{{ actions.reset }}</button>
  </div>
</template>

<script>
export default {
  name: "Actions",
  props: {
    /** Actions */
    actions: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    submit() {
      this.$emit("submit");
    },
    reset() {
      this.$emit("reset");
    },
  },
};
</script>

<style scoped lang="scss">
.actions {
  width: 100%;
  display: flex;
  align-items: stretch;
  padding: 12px;
}

.space {
  width: 12px;
}
</style>