<template>
  <b-container fluid>
    <header class="header">
      <b-row align-v="center" align-h="center">
        <b-col xl="3" lg="1" md="12" ms="12">
          <p>
            <a href="#">
              <b-img src="@/assets/logo.png" alt="Logo du festival"/>
            </a>
          </p>
        </b-col>
        <b-col xl="9" lg="11" md="12" ms="12">
          <p class="title">FESTIVAL DES FILMS DE PLEIN AIR</p>
          <p class="date">DU 5 AU 8 AOÛT</p>
          <p>Projection de films d'auteur au parc Monceau à Paris.</p>
          <Nav/>
        </b-col>
      </b-row>
    </header>
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
<style scoped>
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
  width: 150%;
}

@media all and (max-width: 1199px) {
  header img {
    width: 350%;
  }
}
@media all and (max-width: 1000px) {
  .title {
    font-size: 2em;
  }
}
@media all and (max-width: 991px) {
  header img {
    width: 35%;
  }
}
@media all and (max-width: 768px) {
  header img {
    width: 40%;
  }
}
</style>


