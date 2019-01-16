<template>
  <section class="container">
    <a href="/"> &lt;- back to index </a>
    <h1>{{ inputs.name }}</h1>
    <dl>
      <dt>id</dt><dd>{{ inputs.id }}</dd>
      <dt>name</dt><dd><input v-model="inputs.name"></dd>
      <dt>address</dt><dd><input v-model="inputs.address"></dd>
    </dl>
    <button @click="update">update</button>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      inputs: {
        id: '',
        name: '',
        address: ''
      }
    }
  },

  async asyncData(context) {
    const {params, store} = context;
    const { data } = await axios.get(`/shops/${params.id}`);
    return { inputs: data };
  },

  methods: {
    async update() {
      console.log(this.inputs)
      const result = await axios.put(`/shops/${this.inputs.id}`, this.inputs);
      console.log(result);
    }
  }
}
</script>
