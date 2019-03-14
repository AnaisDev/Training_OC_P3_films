<template>
  <b-container fluid>
    <b-carousel-slide>
      <img slot="img" class="img-carousel" src="@/assets/seraphine.jpg" alt="seraphine">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" src="@/assets/demain-des-l-aube.jpg" alt="demain-des-l-aube">
    </b-carousel-slide>
    <b-carousel-slide>
      <img slot="img" src="@/assets/facteur-cheval.jpg" alt="facteur-cheval">
    </b-carousel-slide>
  </b-container>
</template>

<script>
export default {
  name: 'CarouselMovies',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>