export default {
  name: 'ValidationService',
  validate(input){
    const errors = [];

    if (input.require && !input.value) {
      errors.push(input.requireMsg);
    }
    else if(input.pattern && input.value){
      const reg = new RegExp(input.pattern);
      console.log(reg);
    }
  }
}