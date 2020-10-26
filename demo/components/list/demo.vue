<template>
  <div class="demo-list-wrapper">
    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">Single-Line</h3>
      <mcw-list v-model="selected" class="demo-list">
        <mcw-list-item tabindex="0">One Single-line item 1 </mcw-list-item>
        <mcw-list-item>Two Single-line item 2 </mcw-list-item>
        <mcw-list-item>Three Single-line item 3 </mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">Two Line</h3>

      <mcw-list v-model="selected" two-line class="demo-list">
        <mcw-list-item
          >Two-line item
          <template #secondary-text> <span>Secondary text</span></template>
        </mcw-list-item>

        <mcw-list-item two-line="Other secondary text"
          >Two-line item
        </mcw-list-item>

        <mcw-list-item
          >Two-line item
          <template #secondary-text> <span>More secondary text</span></template>
        </mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">List group</h3>
      <div class="mdc-list-group">
        <h3 class="mdc-list-group__subheader">List 1</h3>
        <mcw-list v-model="selected" class="demo-list">
          <mcw-list-item tabindex="0">line item</mcw-list-item>
          <mcw-list-item>line item</mcw-list-item>
          <mcw-list-item>line item</mcw-list-item>
        </mcw-list>
        <h3 class="mdc-list-group__subheader">List 2</h3>
        <mcw-list v-model="selected" class="demo-list">
          <mcw-list-item tabindex="0">line item</mcw-list-item>
          <mcw-list-item>line item</mcw-list-item>
          <mcw-list-item>line item</mcw-list-item>
        </mcw-list>
      </div>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">List dividers</h3>
      <mcw-list v-model="selected" class="demo-list">
        <mcw-list-item tabindex="0">Item 1 - Division 1</mcw-list-item>
        <mcw-list-item>Item 2 - Division 1</mcw-list-item>

        <li role="separator" class="mdc-list-divider"></li>

        <mcw-list-item tabindex="0">Item 1 - Division 2</mcw-list-item>
        <mcw-list-item>Item 2 - Division 2</mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">Single selection list</h3>
      <mcw-list
        v-model="selected"
        single-selection
        wrap-focus
        class="demo-list"
      >
        <mcw-list-item tabindex="0">Single-line item</mcw-list-item>
        <mcw-list-item>Single-line item</mcw-list-item>
        <mcw-list-item>Single-line item</mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">List with checkbox items</h3>
      <mcw-list
        v-model="listSelected"
        role="group"
        aria-label="List with checkbox items"
        class="demo-list"
      >
        <mcw-list-item role="checkbox" aria-checked="true">
          <label class="mdc-list-item__text" for="demo-list-checkbox-item-1"
            >Option 1</label
          >
        </mcw-list-item>
        <mcw-list-item role="checkbox" tabindex="0">
          <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
            >Option 2</label
          >
        </mcw-list-item>
        <mcw-list-item role="checkbox">
          <label class="mdc-list-item__text" for="demo-list-checkbox-item-3"
            >Option 3</label
          >
        </mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">List with trailing checkbox</h3>
      <mcw-list
        v-model="listSelected"
        role="group"
        aria-label="List with checkbox items"
        class="demo-list"
      >
        <mcw-list-item role="checkbox" aria-checked="true" trailing>
          <label class="mdc-list-item__text" for="demo-list-checkbox-item-1"
            >Option 1</label
          >
        </mcw-list-item>
        <mcw-list-item role="checkbox" tabindex="0" trailing>
          <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
            >Option 2</label
          >
        </mcw-list-item>
        <mcw-list-item role="checkbox" trailing>
          <label class="mdc-list-item__text" for="demo-list-checkbox-item-3"
            >Option 3</label
          >
        </mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">List with radio group</h3>
      <mcw-list v-model="radioSelected" role="radiogroup" class="demo-list">
        <mcw-list-item role="radio" name="demo-group">
          <label class="mdc-list-item__text" for="demo-list-radio-item-1"
            >Option 1</label
          ></mcw-list-item
        >

        <mcw-list-item role="radio" aria-checked="true" name="demo-group">
          <label class="mdc-list-item__text" for="demo-list-radio-item-2"
            >Option 2</label
          >
        </mcw-list-item>
        <mcw-list-item role="radio" name="demo-group">
          <label class="mdc-list-item__text" for="demo-list-radio-item-3"
            >Option 3</label
          >
        </mcw-list-item>
      </mcw-list>
    </div>

    <div class="demo-list-example">
      <h3 class="mdc-typography--subtitle1">Single-Line trailing radio</h3>
      <mcw-list v-model="radioSelected" class="demo-list">
        <mcw-list-item
          tabindex="0"
          role="radio"
          aria-checked="true"
          trailing
          name="mydemo"
          >One Single-line item 1
        </mcw-list-item>
        <mcw-list-item role="radio" trailing name="mydemo"
          >Two Single-line item 2
        </mcw-list-item>
        <mcw-list-item role="radio" trailing name="mydemo"
          >Three Single-line item 3
        </mcw-list-item>
      </mcw-list>
    </div>

    <div class="mdc-typography--caption">
      selected:
      <span class>{{ selected }}</span>
      listSelected:
      <span class>{{ listSelected }}</span>
      radioSelected:
      <span class>{{ radioSelected }}</span>
    </div>
    <div class="mdc-typography--caption">
      picked:
      <span class>{{ picked }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      listSelected: [],
      radioSelected: null,
      picked: '1',
      test_: true,
    };
  },
  computed: {
    test: {
      set(nv) {
        this.test_ = nv;
      },
      get() {
        return this.test_;
      },
    },
  },
  methods: {
    onAction(index) {
      this.selected = index;
    },
  },
};
</script>

<style>
.demo-article {
  width: 100%;
}
.demo-list-wrapper,
.demo-list-example {
  width: 100%;
}
.demo-list {
  max-width: 600px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
