<template>
  <section class="container">
    <h2>新規登録</h2>
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

  methods: {
  }
}
</script>
