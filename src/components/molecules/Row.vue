<template>
  <div class="row">
    <div v-if="row.type === 'text'">
      <Text :input="row" />
    </div>

    <div v-else-if="row.type === 'number'"></div>
  </div>
</template>

<script>
import Text from "../atoms/Text.vue";

export default {
  name: "Row",
  components: {
    Text,
  },
  props: {
    /** Input row */
    row: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.row {
}
</style>