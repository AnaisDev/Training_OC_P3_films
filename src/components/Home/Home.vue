<template>
  <b-container fluid class="home">
    <b-row align-v="center">
      <header>
        <b-col lg="12" md="12" class="img-header">
          <p>
            <a href="#">
              <b-img fluid src="~@/assets/films-sous-les-etoiles.jpg" alt="films-sous-les-etoiles"/>
            </a>
          </p>
        </b-col>
      </header>
    </b-row>

    <b-row align-v="start" align-h="around">
      <b-col xl="7" lg="8" md="12" class="description">
        <b-row align-v="start" class="description">
          <h1 class="h1-title">LE FESTIVAL DES FILMS DE PLEIN AIR</h1>
        </b-row>
        <b-row align-v="start" align-h="center" class="description">
          <b-col xl="5" lg="6" md="6" class="movies-crsl">
            <b-carousel
              id="carousel"
              style="text-shadow: 1px 1px 2px #333;"
              controls
              indicators
              background="none"
              :interval="0"
              v-model="slide"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <CarouselMovies/>
            </b-carousel>
            <p>
              <a href="/films">Voir les films projetés.</a>
            </p>
          </b-col>
          <b-col xl="7" lg="6" md="6">
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
              <br>
              <a href="/reservation">Programme et réservation</a>
            </p>
          </b-col>
        </b-row>

        <b-row align-v="start" class="park">
          <b-col xl="12" lg="12" md="12">
            <b-row align-v="start">
              <h2>Le parc Monceau à Paris :</h2>
            </b-row>
            <b-row align-v="start">
              <b-col lg="7" md="7">
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
                  <br>
                  <a href="/pratique">Informations pratiques</a>
                </p>
              </b-col>
              <b-col lg="5" md="5">
                <p>
                  <a href="#">
                    <b-img fluid src="@/assets/Parc_Monceau_Paris.jpg" alt="parc-monceau"/>
                  </a>
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>

      <b-col xl="4" lg="4" md="12" class="news">
        <b-row align-v="start" class="news">
          <h3>Actualités du festival :</h3>
        </b-row>
        <b-row align-v="start" class="news">
          <b-col xl="12" lg="12" md="12">
            <b-img fluid src="@/assets/popcorns.jpg" alt="popcorns"/>
            <h4>Titre article :</h4>
          </b-col>
          <b-col lg="12" md="12">
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
              <br>
              <a href="/actualites">Voir les autres actualités</a>
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CarouselMovies from '../Movies/CarouselMovies.vue';
export default {
  name: 'Home',
  components: {
    CarouselMovies,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-header {
  padding: 0;
}

h2 {
  padding: 0 0 0 15px;
}

.description {
  margin: 0 0px 0px 0px;
}
.home {
  text-align: justify;
}
.news {
  margin: 0px;
}
.news h3 {
  padding: 0 0 20px 15px;
}
.news h4 {
  padding: 15px 0 0 0;
}

.movies-crsl p {
  text-align: center;
}

.park {
  margin-top: 30px;
}

@media all and (max-width: 992px) {
  .description,
  .news,
  .park {
    width: 90%;
    margin: 10px auto 0px auto;
  }
  h1 {
    font-size: 1.6em;
    margin: 10px 5px 0 25px;
  }
}
</style>