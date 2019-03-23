<template>
  <b-container fluid>
    <b-row class="form">
      <slot></slot>
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
              <br>
              <a href="#">Voir la politique de confidentialité.</a>
            </b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="outline-primary">{{button}}</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Form',
  props: {
    button: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.form {
  margin-bottom: 40px;
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
}
</style>