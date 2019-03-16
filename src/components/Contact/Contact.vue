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
      <b-col xl="8" lg="8" class="contact-form">
        <b-col xl="12" lg="12" mg="12">
          <h1 class="h1-title">CONTACTER NOTRE ASSOCIATION :</h1>
        </b-col>
        <b-col xl="7" lg="9" mg="10">
          <b-form>
            <b-form-group label="Nom : *" label-for="last-name">
              <b-form-input id="last-name" type="text" required/>
            </b-form-group>
            <b-form-group label="Prénom : *" label-for="first-name">
              <b-form-input id="first-name" type="text" required/>
            </b-form-group>
            <b-form-group label="Adresse e-mail : *" label-for="address">
              <b-form-input id="address" type="email" required/>
            </b-form-group>
            <b-form-group label="Téléphone :" label-for="phone">
              <b-form-input id="phone" type="text"/>
            </b-form-group>
            <b-form-group label="Message : *" label-for="message">
              <b-form-textarea id="message" rows="6" required/>
            </b-form-group>
            <b-form-group>
              <b-form-checkbox value="data" required>
                J'accepte de transmettre mes données.*
                <a
                  href="#"
                >Voir la politique de confidentialité.</a>
              </b-form-checkbox>
            </b-form-group>
            <b-button type="submit" variant="outline-primary">Envoyer</b-button>
          </b-form>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Contact',
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
.contact-form {
  margin-bottom: 40px;
}
p {
  text-align: justify;
}
form {
  text-align: left;
}
input,
textarea {
  background-color: $navy-blue !important;
  border: none !important;
  box-shadow: 0px 0px 2px cornflowerblue;
  color: $light-grey !important;
}
</style>