<template>
  <b-container>
    <b-row>
      <b-col xl="4" lg="4" class="contact">
        <h2>ASSOCIATION LES FILMS DE PLEIN AIR</h2>
        <p>
          <i class="fas fa-map-marker-alt"></i> adresse
          <br>75000 PARIS
        </p>
        <p>
          <i class="fas fa-phone"></i> 00 00 00 00 00
        </p>
        <p>
          <a href="#">
            <i class="fab fa-facebook-square"></i> Lien page facebook
          </a>
          <br>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
            Lien tweeter
          </a>
        </p>
      </b-col>
      <b-col xl="8" lg="8">
        <Form button="Envoyer">
          <h1 class="h1-title">CONTACTER NOTRE ASSOCIATION :</h1>
        </Form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Form from '../Form.vue';
export default {
  name: 'Contact',
  components: { Form },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.contact {
  h2 {
    font-size: 1em;
  }
  border: 5px solid $dark-purple;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 40px;
}
p {
  text-align: justify;
}
</style>