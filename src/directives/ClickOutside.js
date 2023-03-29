let handleOutsideClick;
export default {
  name : 'ClickOutside',
  bind(el, binding, vnode) {
    handleOutsideClick = e => {
      e.stopPropagation();
      if (!el.contains(e.target)) {
        vnode.context[binding.expression](e);
      }
    };
    document.addEventListener('click', handleOutsideClick);
  },
  unbind() {
    document.removeEventListener('click', handleOutsideClick);
  }
};