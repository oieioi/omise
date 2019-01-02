<template>
  <h1>{{ name }} id: {{ id }}</h1>
</template>

<script>
export default {
  asyncData(context) {
    return { id: context.params.id }
  },

  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
