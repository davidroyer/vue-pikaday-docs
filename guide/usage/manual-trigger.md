## Manually toggle datepicker

To delegate datepicker opening to other element than underlying input, use two-way `v-p-visible` directive.

<manual-trigger />

```vue
<template>
  <vue-pikaday 
    v-model="now"
    v-p-visible="visible"
  />
  <button @click="toggle()">{{ label }}</button>
</template>

<script>
  import '@enrian/vue-pikaday';

  export default {
    data() {
      return {
        now: null,
        visible: false
      }
    },
    computed: {
      label() {
        return this.visible ? 'Hide' : 'Show';
      }
    },
    methods: {
      toggle() {
        this.visible = !this.visible;
      }
    }
  }
</script>
```
