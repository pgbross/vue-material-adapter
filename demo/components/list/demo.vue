<template>
  <div>
    <mcw-layout-grid class="mcw-demo mcw-demo--container mcw-list-demo">
      <mcw-layout-cell>
        <mcw-list v-model="selected">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">Single-line item</span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Single-line item</span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Single-line item</span>
          </li>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list v-model="selected" two-line>
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Two-line item</span>
              <span class="mdc-list-item__secondary-text">Secondary text</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Two-line item</span>
              <span class="mdc-list-item__secondary-text">Secondary text</span>
            </span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">
              <span class="mdc-list-item__primary-text">Two-line item</span>
              <span class="mdc-list-item__secondary-text">Secondary text</span>
            </span>
          </li>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <div class="mdc-list-group">
          <h3 class="mdc-list-group__subheader">List 1</h3>
          <mcw-list v-model="selected">
            <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__text">line item</span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">line item</span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">line item</span>
            </li>
          </mcw-list>
          <h3 class="mdc-list-group__subheader">List 2</h3>
          <mcw-list v-model="selected">
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">line item</span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">line item</span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__text">line item</span>
            </li>
          </mcw-list>
        </div>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list v-model="selected">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">Item 1 - Division 1</span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Item 2 - Division 1</span>
          </li>
          <li role="separator" class="mdc-list-divider"></li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Item 1 - Division 2</span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Item 2 - Division 2</span>
          </li>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list v-model="selected">
          <li class="mdc-list-item" tabindex="0">
            <span class="mdc-list-item__text">Item 1 - List 1</span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Item 2 - List 1</span>
          </li>
        </mcw-list>
        <hr class="mdc-list-divider" />

        <mcw-list v-model="selected">
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Item 1 - List 2</span>
          </li>
          <li class="mdc-list-item">
            <span class="mdc-list-item__text">Item 2 - List 2</span>
          </li>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list v-model="selected" single-selection wrap-focus>
          <li class="mdc-list-item" role="option" tabindex="0">
            <span class="mdc-list-item__text">Single-line item</span>
          </li>
          <li class="mdc-list-item" role="option">
            <span class="mdc-list-item__text">Single-line item</span>
          </li>
          <li class="mdc-list-item" role="option">
            <span class="mdc-list-item__text">Single-line item</span>
          </li>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list v-model="radioSelected" role="radiogroup">
          <li class="mdc-list-item" role="radio" aria-checked="false">
            <span class="mdc-list-item__graphic">
              <mcw-radio
                id="demo-list-radio-item-1"
                v-model="picked"
                value="1"
                name="demo-list-radio"
              ></mcw-radio>
            </span>
            <label class="mdc-list-item__text" for="demo-list-radio-item-1"
              >Option 1</label
            >
          </li>
          <li class="mdc-list-item" role="radio" aria-checked="false">
            <span class="mdc-list-item__graphic">
              <mcw-radio
                id="demo-list-radio-item-2"
                v-model="picked"
                value="2"
                name="demo-list-radio"
              ></mcw-radio>
            </span>
            <label class="mdc-list-item__text" for="demo-list-radio-item-2"
              >Option 2</label
            >
          </li>
          <li class="mdc-list-item" role="radio" aria-checked="false">
            <span class="mdc-list-item__graphic">
              <mcw-radio
                id="demo-list-radio-item-3"
                v-model="picked"
                value="3"
                name="demo-list-radio"
              ></mcw-radio>
            </span>
            <label class="mdc-list-item__text" for="demo-list-radio-item-3"
              >Option 3</label
            >
          </li>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list
          v-model="listSelected"
          role="group"
          aria-label="List with checkbox items"
        >
          <li class="mdc-list-item" role="checkbox" aria-checked="false">
            <span class="mdc-list-item__graphic">
              <mcw-checkbox id="demo-list-checkbox-item-1"></mcw-checkbox>
            </span>
            <label class="mdc-list-item__text" for="demo-list-checkbox-item-1"
              >Option 1</label
            >
          </li>
          <li
            class="mdc-list-item"
            role="checkbox"
            aria-checked="true"
            tabindex="0"
          >
            <span class="mdc-list-item__graphic">
              <mcw-checkbox
                id="demo-list-checkbox-item-2"
                checked
              ></mcw-checkbox>
            </span>
            <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
              >Option 2</label
            >
          </li>
          <li class="mdc-list-item" role="checkbox" aria-checked="false">
            <span class="mdc-list-item__graphic">
              <mcw-checkbox id="demo-list-checkbox-item-3"></mcw-checkbox>
            </span>
            <label class="mdc-list-item__text" for="demo-list-checkbox-item-2"
              >Option 3</label
            >
          </li>
        </mcw-list>
      </mcw-layout-cell>
    </mcw-layout-grid>

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
      selected: null,
      listSelected: [],
      radioSelected: null,
      picked: '1',
    };
  },
  methods: {
    onAction(index) {
      this.selected = index;
    },
  },
};
</script>

<style>
.demo-article .mcw-layout-grid {
  width: 100%;
}
</style>
