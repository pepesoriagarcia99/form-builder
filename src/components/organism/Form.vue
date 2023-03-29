<template>
  <div class="form">
    <h1 v-if="data.title">{{ data.title }}</h1>
    <Row v-for="(item, index) in rows" :key="index" :row="item" @change="change" />
    <Actions :actions="actions" @submit="submit" @reset="reset" />
  </div>
</template>
<script>
// import { computed } from 'vue';
import Row from '../molecules/Row.vue';
import Actions from '../molecules/Actions.vue';

export default {
  name: 'FormBuilder',
  components: { Row, Actions },
  emits: ['submit', 'change'],
  // provide() {
  //   return {
  //     formErrors: computed(() => this.formErrors),
  //     addError: this.addError,
  //     removeError: this.removeError,
  //     findErrorByInput: this.findErrorByInput
  //   };
  // },
  // data() {
  //   return {
  //     formErrors: []
  //   };
  // },
  props: {
    /** Input form */
    data: {
      type: Object,
      default: () => ({
        title: '',
        items: [],
        actions: {}
      })
    }
  },
  computed: {
    rows() {
      return this.data.items;
    },
    actions() {
      return this.data.actions;
    }
  },
  methods: {
    submit() {
      // this.rows.forEach((row) => {
      //   console.log('🚀 ~ file: Form.vue ~ line 52 ~ this.rows.forEach ~ row', row);
      //   row.forEach((item) => {
      //     console.log('🚀 ~ file: Form.vue ~ line 45 ~ row.forEach ~ item', item);
      //     const e = {
      //       field: item.field,
      //       value: item.value
      //     };
      //     console.log('🚀 ~ file: Form.vue ~ line 48 ~ row.forEach ~ e', e);
      //   });
      // });

      // this.$emit('submit', this.output);
    },
    reset() {
      // this.data.items.map((row) => {
      //   return row.map((item) => {
      //     delete item.value;
      //     return item;
      //   });
      // });
    },
    change(event) {
      // const item = this.output.find((e) => e.field === event.field);
      // if (item) {
      //   item.value = event.value;
      // } else {
      //   this.output.push(event);
      // }

      this.$emit('change', event);
    },
    // addError(error) {
    //   const input = this.findErrorByInput(error.id);

    //   if (input) {
    //     input.errors.push(error.value);
    //   } else {
    //     this.formErrors.push({
    //       id: error.id,
    //       errors: [...error.value]
    //     });
    //   }
    // },
    // removeError(error) {
    //   const input = this.findErrorByInput(error.id);
    //   if (input) {
    //     if (input.errors && input.errors.length > 0) {
    //       const index = input.errors.indexOf(error.value);
    //       this.formErrors.errors.splice(index, 1);
    //     } else {
    //       const index = this.formErrors.findIndex((e) => e.id === error.id);
    //       this.formErrors.splice(index, 1);
    //     }
    //   }
    // },
    // findErrorByInput(inputId) {
    //   const input = this.formErrors.find((e) => e.id === inputId);
    //   return input ? input.errors : [];
    // }
  }
};
</script>
<style scoped lang="scss">
.form {
  width: 100%;
}
</style>
