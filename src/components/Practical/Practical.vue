<template>
  <b-container fluid>
    <b-row>
      <b-col xl="12" class="img-park">
        <b-img fluid src="~@/assets/cinema-parc.jpg" alt="cinema-parc"/>
      </b-col>
    </b-row>
    <b-row align-v="start" align-h="between" class="park">
      <b-col xl="12">
        <h1 class="h1-title">LE PARC MONCEAU À PARIS</h1>
      </b-col>
      <b-col xl="7" lg="7" md="7">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae orci ut ipsum rhoncus consectetur sed in felis. Aliquam vel venenatis turpis. Pellentesque vel nisi et tortor fringilla maximus non sit amet nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nec accumsan felis. Cras lacinia ex mi, quis hendrerit tortor finibus tempor. Vestibulum dignissim turpis dolor, sed euismod dui ultricies non. Donec bibendum sem sit amet commodo vestibulum. Cras consectetur metus enim, venenatis tempor ante tempor ac. Sed blandit diam eu interdum tristique. Nulla facilisi. Phasellus viverra eu nunc id eleifend. Sed cursus sit amet nisi malesuada molestie. In hac habitasse platea dictumst.</p>
      </b-col>
      <b-col xl="4" lg="4" md="4" class="toGo">
        <h2>Comment venir :</h2>
        <p>Transports en commun :
          <br>Ligne 1
          <br>Ligne3
        </p>
      </b-col>
      <b-col xl="12">
        <b-img fluid src="~@/assets/plan-monceau.png" alt="plan-monceau" class="map"/>
      </b-col>
    </b-row>
    <b-row></b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Practical',
};
</script>

<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

p {
  text-align: justify;
}
.img-park {
  padding: 0 0 15px 0;
}
.img-park img {
  width: 100%;
  height: 400px;
}
.park {
  width: 70%;
  margin: auto;
}
.map {
  max-height: 40%;
  width: 100%;
  margin-top: 20px;
}
.toGo {
  padding: 10px;
  border-left: 5px solid $dark-purple;
  margin-left: 15px;
}

@media all and (max-width: 991px) {
  .park {
    width: 100%;
    margin: auto;
  }
}
</style>