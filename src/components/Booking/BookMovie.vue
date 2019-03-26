<template>
  <b-container>
    <b-row>
      <b-col xl="12" lg="12">
        <h1 class="h1-title">{{getMovieToBooking.title}}</h1>
      </b-col>
      <b-col xl="4" lg="4" class="book-date">
        <h3>Horaires et date :</h3>
        <p>Date : {{getMovieToBooking.date}}</p>
        <p>Heure : {{getMovieToBooking.time}}</p>
        <h3>Lieu :</h3>
        <p>Parc Monceau, Paris</p>
        <a :href="getMovieToBooking.linkMovie">
          <b-img
            :src="this.getImgUrl(getMovieToBooking.linkImge)"
            fluid
            :alt="getMovieToBooking.title"
          />
        </a>
      </b-col>
      <b-col xl="8" lg="8">
        <Form button="ENVOYER VOTRE DEMANDE DE RÉSERVATION">
          <b-col xl="12">
            <h2>Réservation :</h2>
          </b-col>
          <b-col xl="7" lg="9" mg="10">
            <b-form-group label="Nombre de places : *" label-for="ticket">
              <b-form-input id="ticket" type="number" required/>
            </b-form-group>
          </b-col>
        </Form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Form from '../Form.vue';
export default {
  name: 'BookMovie',
  components: { Form },
  computed: { ...mapGetters(['getMovieToBooking']) },
  methods: {
    ...mapActions(['fetchBreadcrumb']),
    getImgUrl(path) {
      return require('@/assets' + path);
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.fetchBreadcrumb(this.$route.path);
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.book-date {
  border: 5px solid $dark-purple;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 40px;
  text-align: left;
}
p,
.form-group {
  text-align: left !important;
}
input {
  background-color: $navy-blue !important;
  border: none !important;
  box-shadow: 0px 0px 2px cornflowerblue;
  color: $light-grey !important;
}
</style>