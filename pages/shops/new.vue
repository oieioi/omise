<template>
  <section class="container">
    <h2>{{ inputs.name }}</h2>
    <dl>
      <dt>name</dt><dd><input v-model="inputs.name"></dd>
      <dt>address</dt><dd><input v-model="inputs.address"></dd>
    </dl>
    <button @click="create">create</button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      inputs: {
        name: '',
        address: ''
      }
    }
  },

  methods: {
    async create() {
      const result = await axios.post('/shops', this.inputs);
    }
  }
}
</script>
