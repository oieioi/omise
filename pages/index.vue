<template>
  <section class="container">
    <table>
      <thead>
        <tr>
          <th>店名</th>
          <th>エリア</th>
          <th>予算</th>
          <th>特徴</th>
          <th>食べログ</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="shop in shops"
          :key="shop.id">
          <td>
            <router-link
              :to="{ name: 'shops-id', params: { id: shop.id, name: shop.name }}"
              tag="tr">
              <a> {{ shop.name || shop.id }} </a>
            </router-link>
          </td>
          <td>{{ shop.area }}</td>
          <td>{{ shop.budget }}</td>
          <td>{{ shop.feature }}</td>
          <td>{{ shop.tabelog_url }}</td>
        </tr>
      </tbody>
    </table>
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
table {
  border: 1px solid #ddd;
  border-spacing: 1px;
  margin: 0;
  padding: 0;
}
thead {
  background-color: #ddd;
  margin: 0;
  padding: 0;
}
th {
  margin: 0;
  padding: 0;
}
tr {
  border: 0;
}
td {
  border: 1px solid #eee;
}
</style>
