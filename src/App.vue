<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
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
.carousel-indicators {
  position: relative !important;
  list-style: outside !important;
  margin: 0 0 0 22px !important;
}
.carousel-indicators li {
  width: 0px !important;
  margin: 0 10px !important;
  padding: 0 !important;
}

h1 {
  color: cornflowerblue;
  font-family: 'neon';
}

h2 {
  color: darkmagenta;
  font-size: 1.5em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c2cdd8;
  margin-top: 0px;
  padding: 0;
  background-color: #080816;
}
@font-face {
  font-family: 'neon';

  src: url('~@/assets/fonts/NEON ABSOLUTE SANS1.eot') format('eot'),
    url('~@/assets/fonts/NEON ABSOLUTE SANS1.ttf') format('woff'),
    url('~@/assets/fonts/NEONABSOLUTESANS1Regular.svg') format('truetype'),
    url('~@/assets/fonts/NEONABSOLUTESANS1Regular.woff') format('svg');
}
</style>