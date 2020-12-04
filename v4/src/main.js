import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            components: { default: TeamsList, footerRouter: TeamsFooter },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ]
        }, // or alias: '/' -- URL wont be changed
        {
            path: '/users',
            components: { default: UsersList, footerRouter: UsersFooter }
        },
        { path: '/:notFound(.*)', redirect: '/teams' } // dynamic segment with regex, reroutes anything else to /teams or to a component
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // _ and _2 tell VSCode that we accept these 2 and then savedPosition as 3rd arg,
        // but do not intend to use _ and _2
        if (savedPosition) {
            return savedPosition;
        }

        return { left: 0, top: 0 };
    }
});

router.beforeEach((to, from, next) => {
    // next(false); // cancel navigation
    // next(true); // confirm navigation
    console.log(to, from);
    next();
    // next('/teams');
    // next({name: 'team-members', params: { teamId: 't2' }});

    /* if (to.name === 'team-members') {
        next();
    } else {
        next({ name: 'team-members', params: { teamId: 't2' } });
    } */
});

const app = createApp(App);

app.use(router);

app.mount('#app');
