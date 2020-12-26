<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <h4>{{ computedNameAndAge }}</h4>
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['userName', 'age'],
  setup(props) {
    const computedNameAndAge = computed(() => {
      return props.userName + ' ' + props.age;
    });

    return { computedNameAndAge };
  },
};
</script>