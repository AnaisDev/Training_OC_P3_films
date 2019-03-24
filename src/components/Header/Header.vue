<template>
  <b-container fluid>
    <header class="header header-desktop">
      <b-row align-v="center" align-h="center">
        <b-col xl="2" lg="1" md="12" ms="12">
          <p>
            <a href="/">
              <b-img src="~@/assets/logo.png" alt="Logo du festival"/>
            </a>
          </p>
        </b-col>
        <b-col xl="10" lg="11" md="12" ms="12">
          <p class="title">FESTIVAL DES FILMS DE PLEIN AIR</p>
          <p class="date">DU 5 AU 8 AOÛT</p>
          <p>Projection de films d'auteur au parc Monceau à Paris.</p>
          <Nav/>
        </b-col>
      </b-row>
    </header>
    <b-row>
      <header class="header header-mobile">
        <b-col cols="12">
          <b-row align-v="center" align-h="center">
            <b-col cols="3">
              <p>
                <a href="/">
                  <b-img src="~@/assets/logo.png" alt="Logo du festival"/>
                </a>
              </p>
            </b-col>
            <b-col cols="7">
              <p class="title">FILMS DE PLEIN AIR</p>
              <p>Paris</p>
              <p class="date">DU 5 AU 8 AOÛT</p>
            </b-col>
            <b-col cols="2">
              <Nav/>
            </b-col>
          </b-row>
        </b-col>
      </header>
    </b-row>
  </b-container>
</template>

<script>
import Nav from '../Nav/Nav.vue';
export default {
  name: 'Header',
  components: {
    Nav,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
header p {
  color: lavender;
}
.date {
  color: blueviolet;
}
.title {
  font-family: 'neon';
  /* color: #6060ff; */
  color: cornflowerblue;
  font-size: 2.2em;
}
.header {
  padding: 15px;
}
header img {
  width: 140%;
}

@media all and (max-width: 5000px) {
  .header-mobile {
    display: none;
  }
  header img {
    width: 140%;
    margin-left: 80%;
  }
}
@media all and (max-width: 1199px) {
  header img {
    width: 350%;
    margin-left: 70%;
  }
}
@media all and (max-width: 1000px) {
  .title {
    font-size: 2em;
  }
  header img {
    margin-left: 0%;
  }
}
@media all and (max-width: 991px) {
  header img {
    width: 25%;
  }
}
@media all and (max-width: 767px) {
  header img {
    width: 40%;
  }
}
@media all and (max-width: 576px) {
  .header-desktop {
    display: none;
  }
  .header-mobile {
    display: block;
    position: fixed;
    bottom: 0;
    background-color: $navy-blue;
    z-index: 8000;
    border-top: 1px solid cornflowerblue;
    .title {
      font-size: 1.1em;
    }
    img {
      width: 200%;
    }
    .navbar {
      padding: 0;
    }
  }
}
</style>


