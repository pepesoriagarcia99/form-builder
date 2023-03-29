<template>
  <div class="row">
    <div v-for="(item, index) in row" :key="index">
      <div v-if="item.type === 'text' || item.type === 'number'">
        <Basic :id="uuid()" :input="item" @change="change" />
      </div>
    </div>
  </div>
</template>

<script>
import tools from '@/mixins/tools';
import Basic from '../atoms/Basic.vue';

export default {
  name :  'Row',
  mixins: [tools],
  components :  {
    Basic
  },
  props: {
    /** Input row */
    row: {
      type: Array,
      default: () => []
    }
  },
  emits: ['change'],
  methods: {
    change(event) {
      this.$emit('change', event);
    }
  }
};
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  align-items: stretch;
  padding: 12px;
}
</style>
