<template>
  <div class="d-flex">
    <p>
      I use v-memo="[item]" because v-memo is provided solely for micro optimizations in performance-critical scenarios and should be rarely needed. The most common case where this may prove helpful is when rendering large v-for lists (where length > 1000)
    </p>
  </div>
<!--  <div>-->
<!--    <ul>-->
<!--      <li v-memo="[item]" v-for="item in items" :key="item.id">{{ item.name }}</li>-->
<!--    </ul>-->
<!--  </div>-->
</template>
<script>
export default {
  props: ['items']
}
</script>
<style>
p{
  font-family: "Inter", sans-serif;
  font-size: 16px;
}
</style>
<!--I use v-memo="[item]" because v-memo is provided solely for micro optimizations in performance-critical scenarios and should be rarely needed. The most common case where this may prove helpful is when rendering large v-for lists (where length > 1000)-->