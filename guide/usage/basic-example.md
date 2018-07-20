## Basic example

Simply include `vue-pikaday` component with `v-model` defined.

<ClientOnly>
  <basic-example />
</ClientOnly>

```vue
<template>
  <vue-pikaday 
    v-model="now" 
  />
</template>

<script>
  import '@enrian/vue-pikaday';

  export default {
    data() {
      return {
        now: null
      }
    }
  }
</script>
```
