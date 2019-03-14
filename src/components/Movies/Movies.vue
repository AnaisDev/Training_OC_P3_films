<template>
  <b-container fluid>
    <b-row align-v="center">
      <b-col lg="4" md="4"></b-col>
      <b-col lg="4" md="4">
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
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col lg="2" md="2"></b-col>
      <b-col lg="8" md="8">
        <p class="mt-4">
          <Sheet
            class="sheet-component"
            :title="filmSheet[slide].title"
            :text="filmSheet[slide].text"
            :score="filmSheet[slide].score"
            :director="filmSheet[slide].director"
            :actors="filmSheet[slide].actors"
            :nationalities="filmSheet[slide].nationalities"
            :type="filmSheet[slide].type"
          />
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CarouselMovies from './CarouselMovies.vue';
import Sheet from './Sheet.vue';
export default {
  name: 'Movies',
  components: { Sheet, CarouselMovies },
  data() {
    return {
      slide: 0,
      sliding: null,
      filmSheet: [
        {
          director: 'Martin Provost',
          score: '5',
          title: 'SÉRAPHINE',
          actors: 'Yolande Moreau, Ulrich Tukur, Anne Bennent',
          nationalities: 'français, belge',
          type: 'Biopic,Drame',
          text:
            "En 1912, le collectionneur allemand Wilhelm Uhde, premier acheteur de Picasso et découvreur du douanier Rousseau, loue un appartement à Senlis pour écrire et se reposer de sa vie parisienne. Il prend à son service une femme de ménage, Séraphine, 48 ans. Quelque temps plus tard, il remarque chez des notables locaux une petite toile peinte sur bois. Sa stupéfaction est grande d'apprendre que l'auteur n'est autre que Séraphine. S'instaure alors une relation poignante et inattendue entre le marchand d'art d'avant-garde et la femme de ménage visionnaire.",
        },
        {
          director: 'Denis Dercourt',
          score: '4',
          actors: ' Vincent Perez, Jérémie Renier, Aurélien Recoing',
          nationalities: 'français',
          title: "DEMAIN DÈS L'AUBE",
          type: 'Drame, Thriller',
          text:
            "La relation de deux frères dont le plus jeune est passionné de batailles historiques, au point d'être coupé de la réalité et de ne plus vivre qu'à travers les jeux de rôles. À la demande de leur mère, Mathieu, l'aîné, va tenter de sortir Paul de cet univers mystérieux et secret où la frontière entre jeu et réalité n'existe pas toujours.Pour y parvenir, il n'aura d'autre choix que d'y basculer à son tour... ",
        },
        {
          director: 'Nils Tavernier',
          score: '5',
          actors: 'Jacques Gamblin, Laetitia Casta, Bernard Le Coq',
          nationalities: 'français',
          title: 'LE FACTEUR CHEVAL',
          type: 'Comédie dramatique',
          text:
            'Fin XIXème, Joseph Ferdinand Cheval, est un simple facteur qui parcourt chaque jour la Drôme, de village en village. Solitaire, il est bouleversé quand il rencontre la femme de sa vie, Philomène. De leur union naît Alice. Pour cette enfant qu’il aime plus que tout, Cheval se jette alors dans un pari fou : lui construire de ses propres mains, un incroyable palais. Jamais épargné par les épreuves de la vie, cet homme ordinaire n’abandonnera pas et consacrera 33 ans à bâtir une œuvre extraordinaire : "Le Palais idéal".',
        },
      ],
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
.sheet-component {
  padding: 20px;
  box-shadow: 0px 0px 2px cornflowerblue;
  /* border: 1px solid cadetblue; */
  border-radius: 10px;
}
</style>