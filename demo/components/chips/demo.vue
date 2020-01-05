<template>
  <div class>
    <section class="mcw-demo">
      <mcw-chip-set>
        <mcw-chip>Chip One</mcw-chip>
        <mcw-chip>Chip Two</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline6>Input Chips</mcw-headline6>
      <mcw-chip-set input>
        <mcw-chip id="wiffle" leading-icon="face" trailing-icon="clear">Jane Smith</mcw-chip>
        <mcw-chip leading-icon="face" trailing-icon="clear">John Doe</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline6>Input Chips (font-awesome)</mcw-headline6>
      <mcw-chip-set input>
        <mcw-chip>
          <div slot="leading-icon" class="fa fa-font-awesome"></div>
          <div slot="trailing-icon">
            <span role="gridcell" class="fa fa-times"></span>
          </div>Jane Smith
        </mcw-chip>
        <mcw-chip>
          <div slot="leading-icon" class="fa fa-smile-o"></div>
          <div slot="trailing-icon">
            <span role="gridcell" class="fa fa-times"></span>
          </div>John Doe
        </mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline6>Choice Chips</mcw-headline6>
      <mcw-chip-set choice>
        <mcw-chip>Extra small</mcw-chip>
        <mcw-chip>Small</mcw-chip>
        <mcw-chip>Medium</mcw-chip>
        <mcw-chip>Large</mcw-chip>
        <mcw-chip>Extra Large</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline6>Filter Chips</mcw-headline6>
      <mcw-chip-set filter>
        <mcw-chip leading-icon="add">Tops</mcw-chip>
        <mcw-chip>
          <mcw-material-icon slot="leading-icon" icon="add"></mcw-material-icon>Bottoms
        </mcw-chip>
        <mcw-chip>Shoes</mcw-chip>
        <mcw-chip>Accessories</mcw-chip>
      </mcw-chip-set>

      <mcw-headline6>Filter Chips with leading icon</mcw-headline6>
      <mcw-chip-set filter>
        <mcw-chip leading-icon="face">Tops</mcw-chip>
        <mcw-chip leading-icon="face">Bottoms</mcw-chip>
        <mcw-chip leading-icon="face">Shoes</mcw-chip>
        <mcw-chip leading-icon="face">Accessories</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline6>Custom theme</mcw-headline6>
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
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import '@material/chips/mixins';

.custom-chip-primary {
  @include mdc-chip-fill-color(#6200ee);
  @include mdc-chip-ink-color(white);
}

.custom-chip-secondary {
  @include mdc-chip-fill-color(white);
  @include mdc-chip-ink-color(#018786);
  @include mdc-chip-outline(2px, solid, #018786);
}
</style>
