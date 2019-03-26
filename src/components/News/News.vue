<template>
  <b-container fluid>
    <b-row>
      <b-col xl="9">
        <h1 class="h1-title">DERNIÈRE ACTUALITÉ DU FESTIVAL :</h1>
        <b-row>
          <b-col xl="12" class="first-new">
            <b-card
              :img-src="getImgUrl(getLastNews.img)"
              :img-alt="getLastNews.altImg"
              img-top
              class="mb-3"
            >
              <b-card-text>
                <h4>{{getLastNews.title}}</h4>
                {{getLastNews.text}}
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col xl="12" class="old-news">
            <h2>Autres actualités du festival :</h2>

            <div class="card-left" v-for=" news in getOldNews" :key="news.title">
              <b-row align-v="center" align-h="center">
                <b-col xl="5" class="header">
                  <b-img fluid :src="getImgUrl(news.img)" :alt="news.altImg"/>
                </b-col>
                <b-col xl="7" class="text">
                  <h4>{{news.title}}</h4>
                  <p>
                    {{news.text}}
                    <br>
                    <b-button variant="dark" @click="readNews(news)">Lire l'article</b-button>
                  </p>
                </b-col>
              </b-row>
            </div>
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
  name: 'News',
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
    ...mapGetters(['getOldNews', 'getLastNews']),
  },
  methods: {
    ...mapActions(['readNew', 'fetchBreadcrumb']),
    getImgUrl(path) {
      return require('@/assets' + path);
    },
    readNews(news) {
      this.readNew(news);
      this.$router.push({ name: 'new' });
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

.old-news {
  margin: 40px 0 0 0;
}
.list-historical {
  width: 80%;
  margin: 15px auto;
  border-left: 5px solid $dark-purple;
}
ul {
  text-align: justify;
}
</style>