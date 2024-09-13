// src/directives/custom-directive.js
export default {
  mounted(el, binding) {
    const color1 = binding.arg || 'yellow'; // Default color
    const color2 = binding.value || 'lightblue'; // Default color

    let currentColor = color1;

    el.style.backgroundColor = currentColor;

    el.addEventListener('click', () => {
      currentColor = currentColor === color1 ? color2 : color1;
      el.style.backgroundColor = currentColor;
    });
  }
};
