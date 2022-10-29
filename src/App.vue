<template>
  <div id="app">
    <Header></Header>
    dss
    <Footer></Footer>
  </div>
</template>

<script>
//引入
import Header from "./components/Header/index.vue";
import Footer from './components/Footer/index.vue'
export default {
  name: "app",
  components: {
    Header,
    Footer
  },
};
</script>

<style scoped>
</style>
