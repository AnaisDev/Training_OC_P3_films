<template>
  <b-container fluid class="Nav">
    <b-row>
      <b-navbar toggleable="md" type="dark" sticky class="desktop">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-col cols="12">
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item to="/">
                <i class="fas fa-home"></i>
              </b-nav-item>
              <b-nav-item to="/films">FILMS</b-nav-item>
              <b-nav-item to="/reserver">RÉSERVER</b-nav-item>
              <b-nav-item to="/pratique">PRATIQUE</b-nav-item>
              <b-nav-item to="/actualites">ACTUALITÉS</b-nav-item>
              <b-nav-item to="/association">CONTACT</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  v-if="btnSearch"
                  size="sm"
                  class="mr-sm-2 input-search"
                  type="text"
                  placeholder="Rechercher"
                />
                <b-button @click="search()" size="sm" class="my-2 my-sm-0 btn-search" type="submit">
                  <i class="fas fa-search"></i>
                </b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-navbar>

      <!-- Navbar mobile -->
      <b-col cols="12">
        <b-navbar type="dark" sticky class="mobile">
          <b-navbar-nav>
            <b-nav-item to="/">
              <i class="fas fa-home"></i>
            </b-nav-item>
            <b-nav-item to="/films">FILMS</b-nav-item>
            <b-nav-item to="/reserver">RÉSERVER</b-nav-item>
            <b-nav-item to="/pratique">PRATIQUE</b-nav-item>
            <b-nav-item to="/association">CONTACT</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                v-if="btnSearch"
                size="sm"
                class="mr-sm-2 input-search"
                type="text"
                placeholder="Rechercher"
              />
              <b-button @click="search()" size="sm" class="my-2 my-sm-0 btn-search" type="submit">
                <i class="fas fa-search"></i>
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-navbar>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Nav',
  components: {},
  data() {
    return {
      btnSearch: false,
    };
  },
  methods: {
    search() {
      this.btnSearch = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
.Nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.fa-home {
  margin-right: 5px;
  padding: 6px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;
}

.btn-search {
  background-color: #080816;
  color: rgba(255, 255, 255, 0.5);
}
.btn-search:hover {
  background-color: #080816;
  color: white;
}
.input-search {
  background-color: #080816;
  color: white;
  border-color: rgba(255, 255, 255, 0.5);
  width: 75% !important;
}

.navbar-toggler,
button {
  margin: auto;
}
@media all and (max-width: 5000px) {
  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
}
@media all and (max-width: 576px) {
  .mobile {
    display: block;
    max-width: 100%;
    border-bottom: 1px solid cornflowerblue;
    margin-bottom: 20px;
  }
  .desktop {
    display: none;
  }
  .navbar-nav {
    display: flex;
    flex-direction: column !important;
    text-align: center;
  }
}
</style>


