<template>
  <b-container fluid class="home">
    <b-row>
      <b-col xl="1"></b-col>
      <b-col xl="10">
        <b-row>
          <h1>RÉSERVATION</h1>
        </b-row>

        <b-row align-v="start" align-h="around">
          <b-col>
            <b-row>
              <h2>Programme</h2>
            </b-row>
            <b-row
              v-for="movie in movies"
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
                <b-button variant="outline-primary" href="/reserver">Réserver</b-button>
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
export default {
  name: 'Booking',
  components: {},
  data() {
    return {
      movies: [
        { title: 'Séraphine', date: '5 août 2019', time: '21h30' },
        { title: "Demain dès l'aube", date: '6 août 2019', time: '21h30' },
        { title: 'Le facteur cheval', date: '7 août 2019', time: '22h' },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-size: 1.5em;
  padding-left: 15px;
}
h3 {
  font-size: 1.2em;
  color: darkmagenta;
}
.movie {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px 0;
}

.movie p,
h3 {
  margin: 0;
  text-align: left;
}

.btn-outline-primary {
  color: #080816;
  background-color: cornflowerblue;
  border-color: cornflowerblue;
}
@media all and (max-width: 992px) {
}
</style>