<template>
  <div>
    <h1>Click Open Modal Button to open Modal</h1>
    <button class="btn" @click="openModal">Open Modal</button>

    <!-- Teleport the modal outside the current DOM hierarchy -->
    <teleport to="body">
      <modal
        v-if="isModalVisible"
        :title="'Nissan Patrol'"
        :message="'The Nissan Patrol is a series of off-road vehicles and SUVs manufactured by Nissan in Japan since 1951 and sold throughout the world. It is Nissan\'s longest running series of models.'"
        :isVisible="isModalVisible"
        @close="closeModal"
      />
    </teleport>
  </div>
</template>

<script>
import Modal from '@/views/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      isModalVisible: false
    }
  },
  methods: {
    openModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style>
.btn {
  display: inline-block;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
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
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

/* Button Hover */
.btn:hover {
  background-color: #1d1f23;
  border-color: #1e2022;
}
</style>
