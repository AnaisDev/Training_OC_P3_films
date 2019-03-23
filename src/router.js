import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomeView.vue';
import Movies from './views/MoviesView.vue';
import Booking from './views/BookingView.vue';
import Practical from './views/PracticalView.vue';
import News from './views/NewsView.vue';
import Contact from './views/ContactView.vue';
import BookMovie from './views/BookMovieView.vue';
import New from './views/OneNewView.vue';

Vue.use(Router);

export default new Router({
  base: '',
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Home,
    },
    {
      path: '/films',
      name: 'movies',
      component: Movies,
    },
    {
      path: '/reserver',
      name: 'booking',
      component: Booking,
    },
    {
      path: '/reserver/film',
      name: 'bookingMovie',
      component: BookMovie,
    },
    {
      path: '/pratique',
      name: 'practical',
      component: Practical,
    },
    {
      path: '/actualites',
      name: 'news',
      component: News,
    },
    {
      path: '/association',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/actualites/article',
      name: 'new',
      component: New,
    },
  ],
});
