<template>
  <section class="container">
    <user-data :user-name="user.name" :age="user.age"></user-data>
    <button @click="setAge">Change Age</button>
    <h2>{{ computedName }}</h2>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @clisk="setLastName2">Set Last Bame</button>
    </div>
  </section>
</template>

<script>
import { ref, reactive, toRefs, computed, watch } from 'vue';

import UserData from './components/UserData.vue';

// ref is used for values (string, number, etc.), reactive for objects ONLY
// ref is accessed by ref.value

export default {
  components: {
    UserData
  },
  setup() {
    // ref and reactive - data() { return {}}

    const uName = ref('Rideen');
    const uAge = ref(29);
    const user = reactive({
      name: 'Rideen',
      age: 29,
    });

    setTimeout(() => {
      uName.value = 'R';
      user.name = 'R';
    }, 2000);

    const userRefs = toRefs(user);

    console.log(userRefs);

    const firstName = ref('');
    const lastName = ref('');

    // functions - methods: {}

    function setNewAge() {
      user.age = 25;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    // computed() - computed: {}

    const computedName = computed(() => {
      return firstName.value + ' ' + lastName.value;
    });

    // computedName.value = 'Rade N'; // COMPUTED IS READ ONLY!

    // watch

    const watchedAge = watch([uAge, uName], (newValues, oldValues) => {
      //const watchedAge = watch(uAge, (newValue, oldValue) => {
      console.log('Old age ' + oldValues[0]);
      console.log('New age ' + newValues[0]);
    });

    // template $refs

    const lastNameInput = ref(null);

    function setLastName2() {
      // lastName.value = this.$refs.lastNameInput.value;
      lastName.value = lastNameInput.value.value;
    }

    return {
      user: user,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      computedName,
      firstName,
      lastName,
      watchedAge,
      lastNameInput,
      setLastName2
    };
  },
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