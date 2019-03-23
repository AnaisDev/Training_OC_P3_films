<template>
  <b-container fluid>
    <b-row>
      <b-col xl="1"></b-col>
      <b-col xl="10">
        <b-row>
          <h1 class="h1-title">RÉSERVATION</h1>
        </b-row>

        <b-row align-v="start" align-h="around">
          <b-col>
            <b-row>
              <h2>Programme</h2>
            </b-row>
            <b-row
              v-for="movie in getMoviesBooking"
              :key="movie.title"
              align-v="center"
              align-h="around"
              class="movie"
            >
              <b-col>
                <p>{{movie.date}}</p>
                <p>{{movie.time}}</p>
              </b-col>
              <b-col>
                <h3>{{movie.title}}</h3>
                <p>Parc Monceau, Paris</p>
              </b-col>
              <b-col xl="2">
                <b-button variant="outline-primary" @click="bookMovie(movie)">Réserver</b-button>
              </b-col>
            </b-row>

            <b-col></b-col>
          </b-col>
        </b-row>
      </b-col>
      <b-col xl="1"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Booking',
  data() {
    return {};
  },
  methods: {
    ...mapActions(['newMovieToBooking']),
    bookMovie(movie) {
      this.newMovieToBooking(movie);
      this.$router.push({ name: 'bookingMovie' });
    },
  },
  computed: {
    ...mapGetters(['getMovieToBooking', 'getMoviesBooking']),
  },
  mounted() {
    this.booking = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  padding-left: 15px;
}
h3 {
  font-size: 1.2em;
}
.movie {
  box-shadow: 0px 0px 2px cornflowerblue;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px 0;
}

.movie p,
h3 {
  margin: 0;
  text-align: left;
}
</style>