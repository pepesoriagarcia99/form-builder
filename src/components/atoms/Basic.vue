<template>
  <div class="basic-input">
    <div class="basic-input__container">
      <div class="form__label">
        <span v-if="validation.requiered" class="form__label--requiered">*</span>
        {{ input.label }}
      </div>
      <input
        v-model="input.value"
        :type="input.type"
        class="form__input form__input--box"
        :class="{ 'form__input--box-error': errors.length > 0 }"
        @input="change"
      />
      <div v-for="(error, index) in errors" :key="index" class="form__error">
        {{ error }}
      </div>
    </div>
  </div>
</template>
<script>
import input from '@/mixins/input';

export default {
  name: 'BasiInput',
  mixins: [input],
  emits: ['change'],
  props: {
    id: {
      type: String,
      default: null
    },
    input: {
      type: Object,
      default: () => ({
        label: 'Nombre',
        placeholder: 'Inserte Nombre',
        type: 'text',
        field: 'name',
        validation: {
          requiered: true,
          requieredMsg: 'Nombre es un parametro requerido'
        }
      })
    }
  },
  methods: {
    change() {
      this.validate(this.input.value);
      console.log('error: ', this.errors);

      if (this.errors.length === 0) {
        const obj = {
          field: this.input.field,
          value: this.input.value
        };
        this.$emit('change', obj);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.basic-input {
  width: 100%;
  padding-right: 8px;

  &__container {
    align-items: stretch;
  }
}
</style>
