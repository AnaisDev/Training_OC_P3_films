<template>
  <b-container fluid>
    <b-row align-h="start">
      <b-col lg="12" class="h1">
        <h1>Film projeté:</h1>
      </b-col>
    </b-row>
    <b-row class="sheet" align-v="center" align-h="between">
      <b-col lg="6" class="title">
        <h2>{{title}}</h2>
      </b-col>
      <b-col lg="6" class="score">
        <i class="fas fa-star star-note"></i>
        <i class="fas fa-star star-note"></i>
        <i class="fas fa-star star-note"></i>
        <i class="fas fa-star star-note"></i>
        <i class="fas fa-star"></i>
        <span>Note :</span>
        <span class="number-score">{{score}}</span>
      </b-col>
    </b-row>
    <b-row>
      <b-button variant="outline-primary">Réserver</b-button>
    </b-row>
    <b-row class="synopsis">
      <b-col lg="8" class="text">
        <h3>Synopsis :</h3>
        <p>{{text}}</p>
      </b-col>
      <b-col lg="4" class="actors">
        <h4>Réalisateur :</h4>
        <p>{{director}}</p>
        <h4>Acteurs :</h4>
        <p>{{actors}}</p>
        <h4>Genre :</h4>
        <p>{{type}}</p>
        <h4>Nationalités :</h4>
        <p>{{nationalities}}</p>
      </b-col>
    </b-row>
    <b-row class="share" align-v="center">
      <p>
        Partager la fiche :
        <a href="#">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter-square"></i>
        </a>
      </p>
    </b-row>
    <b-row align-v="center">
      <Comment/>
    </b-row>
  </b-container>
</template>

<script>
import Comment from './Comment.vue';
export default {
  name: 'Sheet',
  components: { Comment },
  props: {
    title: String,
    text: String,
    score: String,
    type: String,
    nationalities: String,
    director: String,
    actors: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin: 0;
}

.h1 {
  padding: 0;
  font-size: 1em !important;
  margin: 0;
}

.h1 h1 {
  text-align: left;
  font-size: 1em !important;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: cornflowerblue;
}

h2 {
  color: darkmagenta;
  font-size: 1.5em;
  font-family: 'neon';
}

h4 {
  font-size: 1.1em;
  margin: 0px 0 5px 0;
}

.score {
  text-align: right;
}
.fa-star {
  font-size: 1.3em;
}
.star-note {
  color: darkkhaki;
}
.number-score {
  font-size: 1.5em;
}

.btn-outline-primary {
  color: #080816;
  background-color: cornflowerblue;
  border-color: cornflowerblue;
}

.title {
  text-align: left;
  padding: 10px 0;
}

.synopsis div {
  text-align: justify;
  margin: 20px 0px;
}

.synopsis .text {
  text-align: justify;
  padding: 10px;
  border-left: 5px solid #202033;
}

.actors {
  padding: 10px;
  border: 1px solid #202033;
}

.synopsis p,
h3 {
  margin-right: 50px;
}

.actors p {
  padding: 0 0 15px 0;
  margin: 0;
}

.share {
  margin: 10px 0;
  font-size: 1.2em;
}

.share .fab {
  font-size: 1.2em;
  margin-right: 0 5px;
}
</style>