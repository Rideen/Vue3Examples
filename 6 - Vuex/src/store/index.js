import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

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
	modules: {
		numbersModule: counterModule
	},
	state() {
		return {
			isLoggedIn: false
		}
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters
});

export default store;