<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Grid</h2>
    <div class="Grid">
      <GridAddress :address="address" :showButtons="false"></GridAddress>
      <GridItemPlaceholder/>
    </div>
  </div>
</template>

<script>
import GridAddress from './components/GridAddress.vue';
import GridItemPlaceholder from './components/GridItemPlaceholder.vue';

export default {
  methods: {
  },
  name: 'App',
  components: {
    GridAddress,
    GridItemPlaceholder,
  },
  data: () => ({
    address: { line1: '43 Maugham Court' },
  }),
};
</script>

<style lang="less">
@import './styles/style.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
