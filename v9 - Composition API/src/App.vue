<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';

// ref is used for values (string, number, etc.), reactive for objects ONLY
// ref is accessed by ref.value

export default {
  setup() {
    const uName = ref('Rideen');
    const user = reactive({
      name: 'Rideen',
      age: 29,
    });

    function setNewAge() {
      user.age = 25;
    }

    setTimeout(() => {
      uName.value = 'R';
      user.name = 'R';
    }, 2000);

    const userRefs = toRefs(user);

    console.log(userRefs);

    return { user: user, setAge: setNewAge };
  },
  // data() {
  //   return {
  //     userName: 'Rideen',
  //   };
  // },
  // methods: {
  //   setAge() {

  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>