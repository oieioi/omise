<template>
  <section class="container">
    <h2>{{ inputs.name || '名称未設定' }}</h2>
    <shops-form :inputs="inputs" />
  </section>
</template>

<script>
import axios from 'axios'
import ShopsForm from '~/components/shops/form.vue'

export default {
  components: {
    ShopsForm
  },

  data() {
    return {
      inputs: {}
    }
  },

  async asyncData(context) {
    const {params, store} = context;
    const { data } = await axios.get(`/shops/${params.id}`);
    return { inputs: data };
  }
}
</script>
<style>
</style>
