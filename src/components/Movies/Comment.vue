<template>
  <b-container fluid>
    <b-row align-v="center">
      <h3>Commentaires du film :</h3>
    </b-row>
    <b-row align-v="center">
      <b-form-input placeholder="e-mail"/>
    </b-row>
    <b-row align-v="center">
      <b-form-textarea rows="3" max-rows="6"/>
    </b-row>
    <b-row align-v="center">
      <b-button variant="dark">Ajouter un commentaire</b-button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input,
.form-control {
  margin: 5px 0;
  background-color: #080816;
  border: 1px solid;
}

.btn {
  background-color: #202033;
  border-color: #202033;
}

.btn:hover {
  background-color: #080816;
}
</style>