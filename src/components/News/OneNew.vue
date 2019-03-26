<template>
  <b-container fluid>
    <b-row>
      <b-col xl="9">
        <b-row>
          <b-col xl="12" class="first-new">
            <b-card :img-src="getImgUrl(getNewsToRead.img)" img-alt="Popcorns" img-top class="mb-3">
              <b-card-text>
                <h1 class="h1-title">{{getNewsToRead.title}}</h1>
                <p class="date">{{getNewsToRead.date}}</p>
                <p>{{getNewsToRead.text}}</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col xl="3" align-h="center">
        <v-calendar :attributes="attrs"></v-calendar>
        <ul class="list-historical">
          <li>Janvier 2019</li>
          <ul>
            <li>
              <a href="#">Article 1</a>
            </li>
          </ul>
          <li>Mars 2019</li>
          <ul>
            <li>
              <a href="#">Article 2</a>
            </li>
            <li>
              <a href="#">Article 3</a>
            </li>
          </ul>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'OneNew',
  data() {
    return {
      attrs: [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#6495ed',
            // Other properties are available too, like `height` & `borderRadius`
          },
          dates: new Date(),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['getNewsToRead']),
  },
  methods: {
    ...mapActions(['fetchBreadcrumb']),
    getImgUrl(path) {
      return require('@/assets' + path);
    },
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

.list-historical {
  width: 80%;
  margin: 15px auto;
  border-left: 5px solid $dark-purple;
}
ul {
  text-align: justify;
}
.date {
  color: darkmagenta;
}
</style>