<template>
  <section class="container">
    <div>
      <h1 class="title">omise</h1>
      <div class="subtitle">
        <a href="/shops/new">create shop</a>
        <a href="/">list {{ shops.length }}</a>
      </div>
      <ul>
        <li
          v-for="shop in shops"
          :key="shop.id">
          <router-link
            :to="{ name: 'shops-id', params: { id: shop.id, name: shop.name }}"
            tag="li">
            <a> {{ shop.name || shop.id }} </a>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return { shops: [] }
  },
  async asyncData({ params }) {
    const { data } = await axios.get('/shops')
    return { shops: data }
  }
}
</script>

<style>
.container {
}
</style>
