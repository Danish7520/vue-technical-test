<template>
  <div class="modal-backdrop" v-if="isVisible">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button class="btn" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    title: String,
    message: String
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: #1e2022;
}
.btn {
  display: inline-block;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #45494e;
  border: 1px solid #69737e;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Button Hover */
.btn:hover {
  background-color: #1d1f23;
  border-color: #1e2022;
}

</style>
