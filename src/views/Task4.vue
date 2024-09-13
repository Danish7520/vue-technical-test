<template>
  <div class="data-fetcher">
    <!-- Loading State -->
    <p v-if="loading">Loading data...</p>

    <!-- Error State -->
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Data List -->
    <ul v-if="!loading && !error">
      <li v-memo="[item]" v-for="(item, index) in data" :key="index" class="list-item">
        <img :src="item.thumbnailUrl" alt="Thumbnail" class="img-thumbnail">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DataFetcher",
  data() {
    return {
      data: [], // To store the fetched data
      loading: false, // Loading state
      error: null, // Error state
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        this.data = result.slice(1,5);
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.data-fetcher {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.list-item {
  display: flex;
  padding: 10px;
  margin: 5px 0;
  background-color: #f0f0f0;
  border-radius: 5px;
  list-style: none;
  color: black;
  font-family: "Inter", sans-serif;
  font-size: 20px;
.img-thumbnail{
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
}

.error {
  color: red;
  font-weight: bold;
}
</style>
