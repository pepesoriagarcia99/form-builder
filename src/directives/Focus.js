let handleOutsideClick;
export default {
  name : 'Focus',
  bind(el, binding, vnode) {
    el.focus();
  }
};