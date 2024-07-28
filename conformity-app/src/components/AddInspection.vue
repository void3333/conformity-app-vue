
<template>
  <div>
    <h1>Add Container Inspection</h1>
    <form @submit.prevent="addInspection">
      <div>
        <label for="containerNumber">Container Number:</label>
        <input type="text" id="containerNumber" v-model="containerNumber" required />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="date" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <input type="text" id="status" v-model="status" required />
      </div>
      <div>
        <label for="inspector">Inspector:</label>
        <input type="text" id="inspector" v-model="inspector" required />
      </div>
      <button type="submit">Add Inspection</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      containerNumber: '',
      date: '',
      status: '',
      inspector: ''
    };
  },
  methods: {
    addInspection() {
      const inspection = {
        containerNumber: this.containerNumber,
        date: this.date,
        status: this.status,
        inspector: this.inspector
      };

      axios.post('https://mocki.io/v1/8ab0ba61-158c-47e5-8ba6-a9aa2f1fccf5 ', inspection)
          .then(response => {
            alert('Inspection added successfully!');
            this.containerNumber = '';
            this.date = '';
            this.status = '';
            this.inspector = '';
          })
          .catch(error => {
            console.error('There was an error adding the inspection!', error);
          });
    }
  }
};
</script>

<style scoped>
h1 {
  color: royalblue;
}
form {
  display: flex;
  flex-direction: column;
}
div {
  margin-bottom: 10px;
}
label {
  margin-right: 10px;
}
input {
  padding: 5px;
}
button {
  padding: 10px;
  background-color: royalblue;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: darkblue;
}
</style>
