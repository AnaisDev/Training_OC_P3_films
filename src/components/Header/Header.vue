<template>
  <b-container fluid>
    <header class="header header-desktop">
      <b-row align-v="center" align-h="center">
        <b-col xl="2" lg="1" class="desktop"></b-col>
        <b-col xl="1" lg="1" md="12" ms="12">
          <p class="logo">
            <a href="/">
              <b-img src="~@/assets/logo.png" alt="Logo du festival"/>
            </a>
          </p>
        </b-col>
        <b-col xl="8" lg="10" md="12" ms="12">
          <p class="title">FESTIVAL DES FILMS DE PLEIN AIR</p>
          <p class="date">DU 5 AU 8 AOÛT</p>
          <p>Projection de films d'auteur au parc Monceau à Paris.</p>
          <Nav/>
          <p>
            <a :href="breadcrumb">/accueil{{getBreadcrumb}}</a>
          </p>
        </b-col>
        <b-col xl="1" class="desktop-xl"></b-col>
      </b-row>
    </header>

    <header class="header header-mobile">
      <b-row align-v="center" align-h="center">
        <b-col v-if="navbarMobile" cols="12">
          <Nav/>
        </b-col>

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
              <b-button variant="outline-primary" v-if="!navbarMobile" @click="openNavbarMobile()">
                <i class="fas fa-bars"></i>
              </b-button>
              <b-button variant="outline-primary" v-if="navbarMobile" @click="closeNavbarMobile()">
                <i class="fas fa-times"></i>
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </header>
  </b-container>
</template>

<script>
import Nav from '../Nav/Nav.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'Header',
  components: {
    Nav,
  },
  data() {
    return {
      navbarMobile: false,
      breadcrumb: '',
    };
  },
  methods: {
    closeNavbarMobile() {
      this.navbarMobile = false;
    },
    openNavbarMobile() {
      this.navbarMobile = true;
    },
  },
  computed: {
    ...mapGetters(['getBreadcrumb']),
  },
  watcher: {
    getBreadcrumb(value) {
      this.breadcrumb = value;
    },
  },
  mounted() {},
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
  .logo {
    text-align: right;
  }
  header img {
    width: 250%;
  }
  .breadcrumb-dark {
    text-align: center;
  }
  .breadcrumb-dark {
    text-align: center;
  }
}
@media all and (max-width: 1400px) {
  .logo {
    text-align: right;
  }
  header img {
    width: 300%;
  }
  .desktop-xl {
    display: block;
  }
}
@media all and (max-width: 1199px) {
  .desktop-xl {
    display: none;
  }
  header img {
    width: 350%;
  }
  .logo {
    text-align: right;
  }
}
@media all and (max-width: 1000px) {
  .title {
    font-size: 2em;
  }
  .desktop {
    display: none;
  }
}
@media all and (max-width: 991px) {
  header img {
    width: 25%;
  }
  .desktop {
    display: none;
  }
  .logo {
    text-align: center;
  }
}
@media all and (max-width: 767px) {
  header img {
    width: 40%;
  }
  .desktop {
    display: none;
  }
}
@media all and (max-width: 576px) {
  .header-desktop {
    display: none;
  }
  .header-mobile {
    display: block;
    position: fixed;
    max-width: 100%;
    bottom: 0;
    left: 0;
    background-color: $navy-blue;
    z-index: 8000;
    border-top: 1px solid cornflowerblue;
    .title {
      font-size: 1.2em;
    }
    img {
      width: 150%;
    }
    .navbar {
      padding: 0;
    }
    .desktop {
      display: none;
    }
  }
}
</style>


