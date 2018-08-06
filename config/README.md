# Config Reference

[[toc]]

## Props

| Name{.mw-100} | Required | Default | Datatype | Description |
| --- | --- | --- | --- | --- |
| v-model | yes |  | Date, null, undefined | component model binding, for more info see [VueJS docs](https://vuejs.org/v2/guide/forms.html#Value-Bindings) |
| options | no | {} | Object | options passed to underlaying Pikaday instance, for all available options see Pikaday [documentation](https://github.com/dbushell/Pikaday#configuration)
| autoDefault | no | false | Boolean | if `true`, component will set actual date as its default value |

## Directives

| Name{.mw-100} | Required | Default | Datatype | Description |
| --- | --- | --- | --- | --- |
| v-p-visible | no | false | Boolean | two-way binding directive to control datepicker visibility |

