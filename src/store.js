import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieToBooking: {
      date: '',
      time: '',
      linkMovie: '',
      linkImge: '',
    },
    moviesSheet: [
      {
        linkMovie: 'https://www.youtube.com/embed/dqZe-1eG9r8',
        director: 'Martin Provost',
        score: '5',
        title: 'SÉRAPHINE',
        actors: 'Yolande Moreau, Ulrich Tukur, Anne Bennent',
        nationalities: 'français, belge',
        type: 'Biopic,Drame',
        text:
          "En 1912, le collectionneur allemand Wilhelm Uhde, premier acheteur de Picasso et découvreur du douanier Rousseau, loue un appartement à Senlis pour écrire et se reposer de sa vie parisienne. Il prend à son service une femme de ménage, Séraphine, 48 ans. Quelque temps plus tard, il remarque chez des notables locaux une petite toile peinte sur bois. Sa stupéfaction est grande d'apprendre que l'auteur n'est autre que Séraphine. S'instaure alors une relation poignante et inattendue entre le marchand d'art d'avant-garde et la femme de ménage visionnaire.",
      },
      {
        linkMovie: 'https://www.youtube.com/embed/v8h4kI7gWxI',
        director: 'Denis Dercourt',
        score: '4',
        actors: ' Vincent Perez, Jérémie Renier, Aurélien Recoing',
        nationalities: 'français',
        title: "DEMAIN DÈS L'AUBE",
        type: 'Drame, Thriller',
        text:
          "La relation de deux frères dont le plus jeune est passionné de batailles historiques, au point d'être coupé de la réalité et de ne plus vivre qu'à travers les jeux de rôles. À la demande de leur mère, Mathieu, l'aîné, va tenter de sortir Paul de cet univers mystérieux et secret où la frontière entre jeu et réalité n'existe pas toujours.Pour y parvenir, il n'aura d'autre choix que d'y basculer à son tour... ",
      },
      {
        linkMovie: 'https://www.youtube.com/embed/zVZ5McbsEHs',
        director: 'Nils Tavernier',
        score: '5',
        actors: 'Jacques Gamblin, Laetitia Casta, Bernard Le Coq',
        nationalities: 'français',
        title: 'LE FACTEUR CHEVAL',
        type: 'Comédie dramatique',
        text:
          'Fin XIXème, Joseph Ferdinand Cheval, est un simple facteur qui parcourt chaque jour la Drôme, de village en village. Solitaire, il est bouleversé quand il rencontre la femme de sa vie, Philomène. De leur union naît Alice. Pour cette enfant qu’il aime plus que tout, Cheval se jette alors dans un pari fou : lui construire de ses propres mains, un incroyable palais. Jamais épargné par les épreuves de la vie, cet homme ordinaire n’abandonnera pas et consacrera 33 ans à bâtir une œuvre extraordinaire : "Le Palais idéal".',
      },
    ],
    moviesBooking: [
      {
        title: 'SÉRAPHINE',
        date: '5 août 2019',
        time: '21h30',
        linkImge: '/seraphine.jpg',
        linkMovie: 'https://www.youtube.com/embed/dqZe-1eG9r8',
      },
      {
        title: "DEMAIN DÈS L'AUBE",
        date: '6 août 2019',
        time: '21h30',
        linkImge: '/demain-des-l-aube.jpg',
        linkMovie: '',
      },
      {
        title: 'LE FACTEUR CHEVAL',
        date: '7 août 2019',
        time: '22h',
        linkImge: '/facteur-cheval.jpg',
        linkMovie: '',
      },
    ],
    news: [
      {
        title: 'Titre article',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi metus, gravida sit amet imperdiet ut, vehicula ac erat. Donec non interdum diam. Pellentesque mollis risus eget nibh varius, sed viverra dui varius. Sed non facilisis nisi. Aenean faucibus eros nec nibh blandit, nec molestie mi molestie. Aenean vel eleifend neque. Morbi scelerisque mauris erat, at maximus felis consectetur eu. Praesent eu libero finibus, scelerisque mi non, porta ante. Nulla auctor bibendum mi ornare ultrices. Nunc convallis imperdiet nunc, quis facilisis sem. Vestibulum vel orci urna. Donec eget volutpat enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ultrices vestibulum odio, non dapibus libero semper sed. Nunc gravida tellus ut lacus pretium, non lobortis nulla lobortis. Mauris molestie libero ut dui iaculis, non eleifend neque interdum.',
        img: '/popcorns.jpg',
        altImg: 'popcorns',
        date: 'Janvier 2019',
      },
      {
        title: 'Article  2',
        text:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
        img: '/cinema.jpg',
        altImg: 'cinema',
        date: 'Mars 2019',
      },
      {
        title: 'Article  3',
        text:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
        img: '/matelas.jpg',
        altImg: 'matelas',
        date: 'Mars 2019',
      },
    ],
    newsToRead: {
      title: '',
      text: '',
      img: '',
      date: '',
    },
  },
  getters: {
    getMoviesSheet: state => {
      return state.moviesSheet;
    },
    getMoviesBooking: state => {
      return state.moviesBooking;
    },
    getMovieToBooking: state => {
      return state.movieToBooking;
    },
    getNewsToRead: state => {
      return state.newsToRead;
    },
    getLastNews: state => {
      return state.news[0];
    },
    getOldNews: state => {
      let lastNews = state.news;
      return lastNews.slice(1);
    },
  },
  actions: {
    newMovieToBooking({ commit }, movie) {
      commit('MovieToBooking', { data: movie });
    },
    readNew({ commit }, news) {
      commit('NewsToRead', { data: news });
    },
  },
  mutations: {
    MovieToBooking(state, payload) {
      Vue.set(state, 'movieToBooking', payload.data);
    },
    NewsToRead(state, payload) {
      Vue.set(state, 'newsToRead', payload.data);
    },
  },
});
