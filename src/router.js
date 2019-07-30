import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Calendar from './views/Calendar.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: 'Home Page - Beenerds Guild',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Beenerds official guild website'
                    },
                    {
                        property: 'og:description',
                        content: 'Beenerds official guild website'
                    }
                ]
            },
            component: Home
        },
        {
            path: '/members',
            name: 'members',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ './views/Members.vue')
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar
        }
    ]
});
