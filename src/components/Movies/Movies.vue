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
        <p>
          <a @click="showModal = true">Bande annonce</a>
        </p>
        <Modal
          :linkMovie="getMoviesSheet[slide].linkMovie"
          v-if="showModal"
          @close="showModal = false"
        ></Modal>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col lg="2" md="2"></b-col>
      <b-col lg="8" md="8">
        <p class="mt-4">
          <Sheet
            class="sheet-component"
            :title="getMoviesSheet[slide].title"
            :text="getMoviesSheet[slide].text"
            :score="getMoviesSheet[slide].score"
            :director="getMoviesSheet[slide].director"
            :actors="getMoviesSheet[slide].actors"
            :nationalities="getMoviesSheet[slide].nationalities"
            :type="getMoviesSheet[slide].type"
          />
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CarouselMovies from './CarouselMovies.vue';
import Modal from '../Modal.vue';
import Sheet from './Sheet.vue';
export default {
  name: 'Movies',
  components: { Sheet, CarouselMovies, Modal },
  data() {
    return {
      slide: 0,
      sliding: null,
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(['getMoviesSheet']),
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
  border-radius: 10px;
}
</style>