export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment'); // commits/executes mutation
    }, 2000);
  },
  increase(context, payload) {
    console.log('main.js > actions > context: ', context);
    context.commit('increase', payload);
  },
}