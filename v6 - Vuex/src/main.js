import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// === Vuex data flow
//   
//	App-wide central data store / State store ->
//	Getters ->
//	Components ->
//	Actions ->
//	Mutations ->
//	App-wide central data store / State store -> ...
//	... repeats

const store = createStore({
	state() {
		return {
			counter: 0
		}
	},
	mutations: {
		increment(state) {
			state.counter = state.counter + 2;
		},
		increase(state, payload) {
			state.counter = state.counter + payload.value;
		}
	},
	actions: {
		increment(context) {
			setTimeout(() => {
				context.commit('increment'); // commits/executes mutation
			}, 2000);
		},
		increase(context, payload) {
			console.log('main.js > actions > context: ', context);
			context.commit('increase', payload);
		}
	},
	getters: {
		finalCounter(state) {
			return state.counter * 2;
		},
		normalizedCounter(_, getters) {
			const finalCounter = getters.finalCounter;

			if (finalCounter < 0) {
				return 0;
			}

			if (finalCounter > 100) {
				return 100;
			}

			return finalCounter;
		}
	}
});

const app = createApp(App);

app.use(store);

app.mount('#app');
