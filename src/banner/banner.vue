<script src="./banner.js"></script>
<template>
  <div
    ref="root"
    class="mdc-banner demo-banner"
    :class="classes"
    role="banner"
    :style="styles"
  >
    <div class="mdc-banner__fixed" v-if="fixed">
      <banner-content
        ref="contentEl"
        :icon="icon"
        :primary-action="primaryAction"
        :secondary-action="secondaryAction"
        :text="text"
        @click="onContentClick"
      ></banner-content>
    </div>

    <banner-content
      ref="contentEl"
      :icon="icon"
      :primary-action="primaryAction"
      :secondary-action="secondaryAction"
      :text="text"
      @click="onContentClick"
      v-else
    ></banner-content>
  </div>
</template>
