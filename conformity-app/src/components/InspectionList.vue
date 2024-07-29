<template>
  <div>
    <h1>Container Inspections</h1>
    <ul>
      <li v-for="inspection in inspections" :key="inspection.id">
        <strong>Container Number:</strong> {{ inspection.containerNumber }} <br />
        <strong>Date:</strong> {{ inspection.date }} <br />
        <strong>Status:</strong> {{ inspection.status }} <br />
        <strong>Inspector:</strong> {{ inspection.inspector }} <br />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      inspections: [],
    };
  },
  created() {
    axios.get('https://mocki.io/v1/8ab0ba61-158c-47e5-8ba6-a9aa2f1fccf5 ')
        .then(response => {
          this.inspections = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the inspection data!', error);
        });
  },
};
</script>

<style scoped>
h1 {
  color: royalblue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
