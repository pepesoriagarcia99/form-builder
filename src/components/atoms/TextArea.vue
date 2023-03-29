<template>
  <div class="text-area"></div>
</template>

<script>
import input from '@/mixins/input';

export default {
  name: 'TextArea',
  mixins: [input],
  emits: ['change'],
  data() {
    return {};
  },
  methods: {
    change() {}
  }
};
</script>

<style scoped lang="scss">
.text-area {
  width: 100%;
  padding-right: 8px;

  &__container {
    align-items: stretch;
  }
}
</style>