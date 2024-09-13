<template>
  <div class="item-list">
    <ul v-if="items?.length > 0">
      <li v-for="(item, index) in items" :key="index" class="list-item">
        {{ item }}
      </li>
    </ul>
    <p class="p-style" v-else>No items available.</p>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => ['Toyota', 'Lexus', 'Honda', 'Type-R','Nissan','Infiniti'],
    },
  },
};
</script>

<style scoped>
.item-list {
  font-family: Arial, sans-serif;
  padding: 10px;
}

.list-item {
  padding: 5px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  list-style: none;
  color: black;
  font-family: fantasy;
  font-size: 20px;
}

p {
  color: #888;
  font-size: 14px;
}
.p-style{
  display: flex;
  justify-content: center;
}
</style>
