import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/teams', component: TeamsList, alias: '/' }, // or alias: '/' -- URL wont be changed
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMembers, props: true },
        { path: '/:notFound(.*)', redirect: '/teams' } // dynamic segment with regex, reroutes anything else to /teams or to a component
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
