<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello, Vue 3!');

</script>

<style scoped>
p{
  display: flex;
  justify-content: center;
  font-family: "Inter",sans-serif;
  font-size: 20px;
}
</style>

<!--<template>-->
<!--  <div>-->
<!--    <p>{{ message }}</p>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      message: 'Hello, Vue 3!'-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->