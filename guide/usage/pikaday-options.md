## Passing options to underlying Pikaday

Options can be passed using `options` prop on component.
To see all possible options, consult official Pikaday [documentation](https://github.com/dbushell/Pikaday#configuration).

::: warning NOTE
`field` option is internally overridden and not available to use.\
`trigger` is not usable either as DOM element do not exist yet when component is registered
::: tip
use two-way `v-p-visible` directive instead
:::

<ClientOnly>
  <pikaday-options />
</ClientOnly>

```vue
<template>
  <vue-pikaday 
    v-model="now"
    :options="pikadayOptions" 
  />
</template>

<script>
  import '@enrian/vue-pikaday';

  export default {
    data() {
      return {
        now: null,
        pikadayOptions: {
          format: 'YYYY/MM/DD',
          minDate: moment().toDate(),
          maxDate: moment().add(7, 'days').toDate()
        }
      }
    }
  }
</script>
```
