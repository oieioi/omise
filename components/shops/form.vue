<template>
  <section class="shops-form">
    <dl>
      <dt>id</dt><dd>{{ inputs.id || '新規登録' }}</dd>
      <dt>店名</dt><dd><input v-model="inputs.name"></dd>
      <dt>エリア</dt><dd><input v-model="inputs.area"></dd>
      <dt>住所詳細</dt><dd><input v-model="inputs.address"></dd>
      <dt>予算</dt>
      <dd>
        <select v-model="inputs.budget">
          <option value="">select</option>
          <option value="low">低め</option>
          <option value="middle">普通</option>
          <option value="high">高め</option>
        </select>
      </dd>
      <dt>特徴</dt><dd><textarea v-model="inputs.feature"/></dd>
      <dt>食べログURL</dt><dd><input v-model="inputs.tabelog_url"></dd>
    </dl>
    <button
      v-if="inputs.id"
      @click="update">update</button>
    <button
      v-if="!inputs.id"
      @click="create">create</button>
    <button
      v-if="inputs.id"
      @click="destroy">destroy</button>
  </section>
</template>
<script>
import axios from 'axios';

export default {
  props: {
    inputs: {
      type: Object,
      required: true,
      default () { return {} }
    }
  },

  data() {
    return {}
  },

  methods: {
    async update() {
      try {
        console.log(this.inputs);
        const { data } = await axios.put(`/shops/${this.inputs.id}`, this.inputs);
        alert('updated!');
      } catch (e) {
        console.error(e);
        alert('something wrong!');
      }
    },
    async create() {
      try {
        const { data } = await axios.post('/shops', this.inputs);
        alert('created!');
        this.$router.push({ name: 'shops-id', params: { id: data.id }})
      } catch (e) {
        console.error(e);
        alert('something wrong!!');
      }
    },
    async destroy() {
      try {
        const ok = confirm(`YOU WANT TO DELETE ${this.inputs.name} ?`);
        if (!ok) return;
        const result = await axios.delete(`/shops/${this.inputs.id}`);
        this.$router.push({ name: 'index' })
      } catch (e) {
        alert('something wrong!');
        console.error(e);
      }
    }
  }
}
</script>

<style>
dl {
  padding: 10px;
}
dt {
  display: block;
}
dd {
  padding-left: 20px;
  display: block;
}
</style>
