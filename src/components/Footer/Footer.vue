<template>
  <b-container fluid>
    <footer class="footer">
      <b-row align-h="around" align-v="center">
        <b-col lg="4" md="4">
          <p>ASSOCIATION LES FILMS DE PLEIN AIR</p>
          <p>adresse</p>
          <p>75000 PARIS</p>
        </b-col>
        <b-col lg="4" md="4">
          <p>
            <a href="#">
              <i class="far fa-envelope"></i>
              Contacter l'association
            </a>
          </p>
          <p>
            <a href="#">
              <i class="fab fa-facebook-square"></i> Lien page facebook
            </a>
          </p>
          <p>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
              Lien tweeter
            </a>
          </p>
        </b-col>
        <b-col lg="4" md="4">
          <p>
            Partager :
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
          </p>

          <p>
            <a href="#">Mentions légales et politique de confidentialité</a>
          </p>
        </b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin: 40px auto 0 auto;
  padding: 10px 15px;
  text-align: left;
  font-size: 0.8em;
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
}
@media all and (max-width: 576px) {
  .footer {
    margin-bottom: 180px;
    padding-bottom: 60px;
  }
}
</style>


