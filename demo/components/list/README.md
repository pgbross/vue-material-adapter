## Usage

### Basic List

```html
<div class="demo-list-example">
  <h3 class="mdc-typography--subtitle1">Single-Line</h3>
  <mcw-list
    v-model="selected"
    class="demo-list"
    @mdclist:action="onAction"
    role="listbox"
  >
    <mcw-list-item tabindex="0" name="wiffle" id="id1" start="icon">
      <template #start>
        <i class="material-icons">home</i>
      </template>
      One Single-line item 1
    </mcw-list-item>

    <li role="separator" class="mdc-list-divider"></li>

    <mcw-list-item end="icon"
      >Two Single-line item 2

      <template #tend>
        <i class="material-icons">home</i>
      </template>
    </mcw-list-item>
    <mcw-list-item end="meta"
      >Three Single-line item 3
      <template #end> meta text </template></mcw-list-item
    >

    <mcw-list-item
      >Two-line item
      <template #secondary-text> Other secondary text </template>
    </mcw-list-item>
  </mcw-list>
</div>
```

```javascript
export default {
  methods: {
    onAction({ index }) {
      console.log(index);
    },
  },
};
```

### Props

#### mcw-list

| prop               | Type    | Default | Description                                                          |
| ------------------ | ------- | ------- | -------------------------------------------------------------------- |
| `multi-selectable` | Boolean | false   | support multi selection                                              |
| `wrap-focus`       | Boolean | false   | wrap to top of list on next element                                  |
| `textualList`      | Boolean | false   | configures lists that start with text                                |
| `modelValue`       |         |         | the v-model property                                                 |
| `vertical`         | String  | true    | VERTICAL if true, else HORIZONTAL                                    |
| `type-ahead`       | Boolean | false   | configures the list to use typeahead                                 |
| `role`             | String  |         | `listbox` or `menu` for interactive, else not-set for non-iteractive |

### List Dividers

```html
<mcw-list v-model="selected" class="demo-list">
  <mcw-list-item tabindex="0">Item 1 - Division 1</mcw-list-item>
  <mcw-list-item>Item 2 - Division 1</mcw-list-item>

  <li role="separator" class="mdc-list-divider"></li>

  <mcw-list-item tabindex="0">Item 1 - Division 2</mcw-list-item>
  <mcw-list-item>Item 2 - Division 2</mcw-list-item>
</mcw-list>
```

### mcw-list-item

| prop       | Type    | Default | Description                        |
| ---------- | ------- | ------- | ---------------------------------- |
| `disabled` | Boolean | false   | Set to true to disable item        |
| `id`       | String  |         | Css id to apply to content element |
| `start`    | String  |         | Define start slot type             |
| `end`      | String  |         | Define end slot type               |

> Start types: 'avatar \| icon \| thumbnail \| checkbox \| radio \| switch \| image \| video'  
> End types: 'icon \| meta \| checkbox \| radio \| switch'

### Radio buttons

```html
<mcw-list v-model="selected" class="demo-list" role="listbox">
  <mcw-list-item end="radio"
    >Dog
    <template #end>
      <mcw-radio
        v-model="radioSelected"
        id="dog"
        radio-classes="my-radio"
        name="pets"
        value="dog"
      ></mcw-radio>
    </template>
  </mcw-list-item>

  <mcw-list-item end="radio"
    >Cat
    <template #end>
      <mcw-radio
        v-model="radioSelected"
        id="cat"
        radio-classes="my-radio"
        name="pets"
        value="cat"
      ></mcw-radio>
    </template>
  </mcw-list-item>
</mcw-list>
```

### Reference

- <https://github.com/material-components/material-components-web/tree/master/packages/mdc-list>
