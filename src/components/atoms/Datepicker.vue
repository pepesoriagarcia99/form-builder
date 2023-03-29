<template>
  <div class="date-picker">
    <input
      v-model="input.value"
      :type="inputType"
      class="form__input form__input--box"
      :class="{ 'form__input--box-error': errors.length > 0 }"
      @input="change"
    />
  </div>
</template>

<script>
import input from '@/mixins/input';

export default {
  name: 'DatePicker',
  mixins: [input],
  emits: ['change'],
  data() {
    return {
      inputType: 'date'
    };
  },
  methods: {
    change() {
      // this.errors = this.validate(this.input);

      // if (this.errors.length === 0) {
      //   const obj = {
      //     field: this.input.field,
      //     value: this.input.value
      //   };
      //   this.$emit('change', obj);
      // }
    }
  }
};
</script>

<style scoped lang="scss">
.date-picker {
  width: 100%;
  padding-right: 8px;

  &__container {
    align-items: stretch;
  }
}
</style>