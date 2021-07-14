<template>
  <div class="tooltip-demo">
    <mcw-tooltip id="tooltip-id">My tooltip 1</mcw-tooltip>
    <mcw-tooltip id="tooltip-id2" position="end,above"
      >Another tooltip 2</mcw-tooltip
    >

    This is <a aria-describedby="tooltip-id" href="www.google.com"> Link </a>.
    <p>
      Here is
      <mcw-button aria-describedby="tooltip-id2" outlined>My Button</mcw-button>
    </p>

    <div class="mdc-tooltip-wrapper--rich">
      <mcw-button aria-describedby="tooltip-id3" outlined
        >Rich Button</mcw-button
      >
      <mcw-tooltip id="tooltip-id3" class="mdc-tooltip--rich">
        <div class="mdc-tooltip__surface">
          <p class="mdc-tooltip__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pretium vitae est et dapibus. Aenean sit amet felis eu lorem
            fermentum aliquam sit amet sit amet eros.
          </p>
        </div>
      </mcw-tooltip>
    </div>

    <div class="mdc-tooltip-wrapper--rich">
      <mcw-button aria-describedby="tooltip-id4" outlined
        >Rich interactive Button</mcw-button
      >
      <mcw-tooltip
        id="tooltip-id4"
        class="mdc-tooltip--rich"
        tabindex="-1"
        data-mdc-tooltip-persistent="true"
      >
        <h2 class="mdc-tooltip__title">Lorem Ipsum</h2>
        <p class="mdc-tooltip__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pretium vitae est et dapibus. Aenean sit amet felis eu lorem fermentum
          aliquam sit amet sit amet eros.
          <a class="mdc-tooltip__content-link" href="google.com">link</a>
        </p>
        <div class="mdc-tooltip--rich-actions">
          <mcw-button class="mdc-tooltip__action" aria-label="action">
            action
          </mcw-button>
        </div>
      </mcw-tooltip>
    </div>
  </div>
</template>

<script src="./tooltip.js"></script>

<style lang="scss">
.tooltip-demo {
  width: 100%;
  background-color: #f2f2f2;
}
</style>
