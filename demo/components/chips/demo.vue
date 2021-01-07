<template>
  <div class>
    <section class="mcw-demo">
      <mcw-chip-set>
        <mcw-chip>Chip One</mcw-chip>
        <mcw-chip>Chip Two</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <div class="mdc-typography--headline6">Input Chips</div>
      <mcw-chip-set input>
        <mcw-chip id="jane-chip" leading-icon="face" trailing-icon="clear"
          >Jane Smith</mcw-chip
        >
        <mcw-chip leading-icon="face" trailing-icon="clear">John Doe</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <div class="mdc-typography--headline6">Choice Chips</div>
      <mcw-chip-set choice>
        <mcw-chip>Extra small</mcw-chip>
        <mcw-chip>Small</mcw-chip>
        <mcw-chip>Medium</mcw-chip>
        <mcw-chip>Large</mcw-chip>
        <mcw-chip>Extra Large</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <div class="mdc-typography--headline6">Filter Chips</div>
      <mcw-chip-set filter>
        <mcw-chip leading-icon="add">Tops</mcw-chip>
        <mcw-chip>
          <template #leading-icon>
            <mcw-material-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              icon="add"
            ></mcw-material-icon
          ></template>
          Bottoms
        </mcw-chip>
        <mcw-chip>Shoes</mcw-chip>
        <mcw-chip>Accessories</mcw-chip>
      </mcw-chip-set>

      <div class="mdc-typography--headline6">
        Filter Chips with leading icon
      </div>
      <mcw-chip-set filter>
        <mcw-chip leading-icon="face">Tops</mcw-chip>
        <mcw-chip leading-icon="face">Bottoms</mcw-chip>
        <mcw-chip leading-icon="face">Shoes</mcw-chip>
        <mcw-chip leading-icon="face">Accessories</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <div class="mdc-typography--headline6">Custom theme</div>
      <mcw-chip-set>
        <mcw-chip class="custom-chip-primary">Add to Calendar</mcw-chip>
        <mcw-chip class="custom-chip-primary">Bookmark</mcw-chip>
        <mcw-chip class="custom-chip-primary">Set Alarm</mcw-chip>
        <mcw-chip class="custom-chip-primary">Get Directions</mcw-chip>
      </mcw-chip-set>

      <mcw-chip-set>
        <mcw-chip class="custom-chip-secondary">Add to Calendar</mcw-chip>
        <mcw-chip class="custom-chip-secondary">Bookmark</mcw-chip>
        <mcw-chip class="custom-chip-secondary">Set Alarm</mcw-chip>
        <mcw-chip class="custom-chip-secondary">Get Directions</mcw-chip>
      </mcw-chip-set>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@use '@material/chips/mixins' as chips;

.custom-chip-primary {
  @include chips.fill-color(#6200ee);
  @include chips.ink-color(white);
}

.custom-chip-secondary {
  @include chips.fill-color(white);
  @include chips.ink-color(#018786);
  @include chips.outline(2px, solid, #018786);
}
</style>
