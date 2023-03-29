export default {
  data() {
    return {
      errors: []
    };
  },
  computed: {
    validation() {
      return this.input.validation || {};
    }
  },
  methods: {
    validate({ value }) {
      console.log('🚀 ~ file: input.js ~ line 14 ~ validate ~ value', value);

      const action = (valid, error) => {

        console.log('🚀 ~ file: input.js ~ line 15 ~ action ~ error', error);
        console.log('🚀 ~ file: input.js ~ line 15 ~ action ~ valid', valid);

        // const index = this.errors.indexOf(error);
        // if (index !== -1) {
        //   if (valid) {
        //     this.errors.push(error);
        //   } else {
        //     this.errors.splice(index, 1);
        //   }
        // }

        
      };

      /** requiered validation */
      if (this.validation.requiered) {
        action(!value, this.validation.requieredMsg);
      }

      if (value) {
        /** pattern validation */
        if (this.validation.pattern) {
          const reg = new RegExp(this.validation.pattern);
          action(reg.test(value), this.validation.patternMsg);
        }

        /** custom validation */
        if (typeof this.validation.custom === 'function') {
          const callbackResult = this.validation.custom(value);
          action(callbackResult, this.validation.customMsg);
        } else if (typeof this.validation.custom === 'Array') {
          this.validation.custom.forEach((element) => {
            const callbackResult = element.callback(value);
            action(callbackResult, element.msg);
          });
        }
      }
    }
  }
};
