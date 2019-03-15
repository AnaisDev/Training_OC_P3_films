<template>
  <b-container fluid>
    <b-row>
      <b-col xl="9">
        <h1 class="h1-title">Dernière actualité du festival :</h1>
        <b-row>
          <b-col xl="12" class="first-new">
            <b-card img-src="~@/assets/popcorns.jpg" img-alt="Popcorns" img-top class="mb-3">
              <b-card-text>
                <h4>Titre article :</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi metus, gravida sit amet imperdiet ut, vehicula ac erat. Donec non interdum diam. Pellentesque mollis risus eget nibh varius, sed viverra dui varius. Sed non facilisis nisi. Aenean faucibus eros nec nibh blandit, nec molestie mi molestie. Aenean vel eleifend neque. Morbi scelerisque mauris erat, at maximus felis consectetur eu. Praesent eu libero finibus, scelerisque mi non, porta ante. Nulla auctor bibendum mi ornare ultrices. Nunc convallis imperdiet nunc, quis facilisis sem. Vestibulum vel orci urna. Donec eget volutpat enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ultrices vestibulum odio, non dapibus libero semper sed. Nunc gravida tellus ut lacus pretium, non lobortis nulla lobortis. Mauris molestie libero ut dui iaculis, non eleifend neque interdum.
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col xl="12" class="old-news">
            <h2>Autres actualités du festival :</h2>

            <div class="card-left">
              <b-row align-v="center" align-h="center">
                <b-col xl="5" class="header">
                  <b-img fluid src="~@/assets/cinema.jpg" alt="Cinema neon"/>
                </b-col>
                <b-col xl="7" class="text">
                  <h4>Titre article 2 :</h4>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
                    <br>
                    <a href="/article2">Lire l'article</a>
                  </p>
                </b-col>
              </b-row>
            </div>

            <div class="card-left" align-v="center">
              <b-row align-v="center" align-h="center">
                <b-col xl="5" class="header">
                  <b-img fluid src="~@/assets/matelas.jpg" alt="Matelas parc"/>
                </b-col>
                <b-col xl="7" class="text">
                  <h4>Article 3 :</h4>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
                    <br>
                    <a href="/article3">Lire l'article</a>
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
              <a href="/article1">Article 1</a>
            </li>
          </ul>
          <li>Mars 2019</li>
          <ul>
            <li>
              <a href="/article2">Article 2</a>
            </li>
            <li>
              <a href="/article3">Article 3</a>
            </li>
          </ul>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
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
};
</script>

<style scoped lang="scss">
@import '@/assets/custom.scss';
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
h1,
h2 {
  text-align: left;
}
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