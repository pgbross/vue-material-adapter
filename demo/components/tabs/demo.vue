<template>
  <div class>
    <div class="mdc-typography--headline6">Simple</div>
    <section class="mcw-demo mcw-demo--container">
      <mcw-tab-bar ref="firstExample" @update:modelValue="onSelected">
        <mcw-tab v-for="item in filteredItems" :key="item.label">{{
          item
        }}</mcw-tab>
      </mcw-tab-bar>
    </section>
    <br />
    <div class="mdc-typography--headline6">Span content</div>
    <section class="mcw-demo mcw-demo--container">
      <mcw-tab-bar span-content fade @update:modelValue="onSelected">
        <mcw-tab v-for="item in filteredItems" :key="item.label">{{
          item
        }}</mcw-tab>
      </mcw-tab-bar>
    </section>
    <br />
    <div v-if="selectedItem" style="text-align: right">
      <div class="mdc-typography--caption">
        Selected:
        <span class="demo-tabs-selected">{{ selectedItem }}</span>
      </div>
    </div>
    <div class="mdc-typography--headline6">With icons and text</div>
    <section class="mcw-demo mcw-demo--container">
      <mcw-tab-bar>
        <mcw-tab icon="phone">Recents</mcw-tab>
        <mcw-tab icon="favorite">Favorites</mcw-tab>
        <mcw-tab icon="personal_pin">Nearby</mcw-tab>
      </mcw-tab-bar>
    </section>
    <div class="mdc-typography--headline6">With stacked icons and text</div>
    <section class="mcw-demo mcw-demo--container">
      <mcw-tab-bar stacked>
        <mcw-tab icon="phone">Recents</mcw-tab>
        <mcw-tab icon="favorite">Favorites</mcw-tab>
        <mcw-tab icon="personal_pin">Nearby</mcw-tab>
      </mcw-tab-bar>
    </section>
    <div class="mdc-typography--headline6">Scrollable</div>
    <section class="mcw-demo mcw-demo--container mcw-demo--container-narrow">
      <mcw-tab-bar active-tab-index="1" @update:modelValue="onSelected">
        <mcw-tab v-for="item in items" :key="item.label">{{ item }}</mcw-tab>
      </mcw-tab-bar>
    </section>
  </div>
</template>

<script src="./tabs.js"></script>

<style>
.demo-tabs-selected {
  font-style: italic;
}
</style>
