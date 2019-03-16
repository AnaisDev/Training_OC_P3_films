<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import './assets/custom.scss';
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>