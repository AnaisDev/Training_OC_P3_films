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
  position: relative;
  list-style: outside;
  margin: 0 0 0 22px;
}

.carousel-indicators li {
  width: 0px;
  margin: 0 10px;
  padding: 0;
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
  src: url('/src/assets/NEON ABSOLUTE SANS1.eot') format('eot'),
    url('/src/assets/NEON ABSOLUTE SANS1.ttf') format('woff'),
    url('/src/assets/NEON ABSOLUTE SANS1.svg') format('truetype'),
    url('/src/assets/NEON ABSOLUTE SANS1.woff') format('svg');
}
</style>