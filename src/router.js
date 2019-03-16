import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import TopStreams from './views/TopStreams'
import StreamPage from './views/StreamPage'
import Streams from './views/Streams'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/game/:id',
      name: 'streams',
      component: Streams,
    },
    {
      path: '/topstreams',
      name: 'topstreams',
      component: TopStreams,
    },
    {
      path: '/stream/:id',
      name: 'streampage',
      component: StreamPage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
})
