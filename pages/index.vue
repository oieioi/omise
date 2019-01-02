<template>
  <section class="container">
    <div>
      <h1 class="title">omise</h1>
      <h2 class="subtitle">
        <a href="/shops/1">1</a>
        <a href="/shops/new">create shop</a>
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
