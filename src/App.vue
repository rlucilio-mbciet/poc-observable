<template>
  <div id="app">
    <p>{{ nameUser }}</p>
    <p>{{ upperName }}</p>
    <input type="text" v-model="nameUser" />
    <button @click="fetchName">Fetch</button>
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    fetchName() {
      this.$Store.users.actions.fetchName();
    },
  },
  computed: {
    upperName() {
      return this.$Store.users.getters.upperName();
    },
    nameUser: {
      get() {
        return this.$Store.users.state.names[0];
      },
      set(value) {
        this.$Store.users.mutations.setName(value);
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
