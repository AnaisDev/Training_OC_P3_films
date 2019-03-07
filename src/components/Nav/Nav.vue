<template>
  <div class="Nav">
    <b-navbar toggleable="md" type="dark" fixed>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">
            <i class="fas fa-home"></i>
          </b-nav-item>
          <b-nav-item to="/films">FILMS</b-nav-item>
          <b-nav-item to="/reserver">RÉSERVER</b-nav-item>
          <b-nav-item to="/pratique">FESTIVAL PRATIQUE</b-nav-item>
          <b-nav-item to="/actualites">ACTUALITÉS</b-nav-item>
          <b-nav-item to="/contact">CONTACT</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              v-if="btnSearch"
              size="sm"
              class="mr-sm-2"
              type="text"
              placeholder="Rechercher"
            />
            <b-button @click="search()" size="sm" class="my-2 my-sm-0" type="submit">
              <i class="fas fa-search"></i>
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
<style scoped>
b-navbar {
  position: fixed;
}
.Nav {
  display: flex;
  justify-content: space-around;
}
</style>


