<template>
  <div class>
    <section class="mcw-demo">
      <mcw-chip-set>
        <mcw-chip>Item One</mcw-chip>
        <mcw-chip>Item Two</mcw-chip>
        <mcw-chip>Item Three</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline4>Entry Chips</mcw-headline4>
      <mcw-chip-set>
        <mcw-chip leading-icon="face" trailing-icon="more_vert">Jane Smith</mcw-chip>
        <mcw-chip
          leading-icon="face"
          trailing-icon="more_vert"
          :shouldRemoveOnTrailingIconClick="false"
        >John Doe</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline4>Entry Chips (font-awesome)</mcw-headline4>
      <mcw-chip-set>
        <mcw-chip :shouldRemoveOnTrailingIconClick="false">
          <div slot="leading-icon" class="fa fa-font-awesome"></div>
          <div slot="trailing-icon" class="fa fa-ellipsis-v"></div>Jane Smith
        </mcw-chip>
        <mcw-chip :shouldRemoveOnTrailingIconClick="false">
          <div slot="leading-icon" class="fa fa-smile-o"></div>
          <div slot="trailing-icon" class="fa fa-ellipsis-v"></div>John Doe
        </mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline4>Choice Chips</mcw-headline4>
      <mcw-chip-set choice>
        <mcw-chip>Extra small</mcw-chip>
        <mcw-chip>Small</mcw-chip>
        <mcw-chip>Medium</mcw-chip>
        <mcw-chip>Large</mcw-chip>
        <mcw-chip>Extra Large</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline4>Filter Chips</mcw-headline4>
      <mcw-chip-set filter>
        <mcw-chip trailing-icon="cancel" leading-icon="add">Tops</mcw-chip>
        <mcw-chip>
          <mcw-material-icon slot="leading-icon" icon="add"></mcw-material-icon>Bottoms
          <mcw-material-icon slot="trailing-icon" icon="cancel"></mcw-material-icon>
        </mcw-chip>
        <mcw-chip trailing-icon="cancel">Shoes</mcw-chip>
        <mcw-chip trailing-icon="cancel">Accessories</mcw-chip>
      </mcw-chip-set>

      <mcw-headline4>Filter Chips with leading icon</mcw-headline4>
      <mcw-chip-set filter>
        <mcw-chip leading-icon="face" trailing-icon="cancel">Tops</mcw-chip>
        <mcw-chip leading-icon="face" trailing-icon="cancel">Bottoms</mcw-chip>
        <mcw-chip leading-icon="face" trailing-icon="cancel">Shoes</mcw-chip>
        <mcw-chip leading-icon="face" trailing-icon="cancel">Accessories</mcw-chip>
      </mcw-chip-set>
    </section>

    <section class="mcw-demo">
      <mcw-headline4>Custom theme</mcw-headline4>
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
