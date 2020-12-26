<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <h4>{{ computedNameAndAge }}</h4>
  </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['userName', 'age'],
  setup(props, context) {
    // accessing props

    const computedNameAndAge = computed(() => {
      return props.userName + ' ' + props.age;
    });

    // inject
    // not recommended to change, use as read only and change in the provider class
    const injectedAge = inject('userAge');
    console.log(injectedAge);

    console.log(context);

    // this.$emit() > context.emits > context.emit('save-data)

    // slots > context.slots

    return { computedNameAndAge };
  },
};
</script>