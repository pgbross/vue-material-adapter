<script src="./circular-progress.js"></script>
<template>
  <!--must be no space between divs-->
  <!-- prettier-ignore -->
  <div ref="root" :class="classes" role="progressbar" v-bind="rootAttributes">
  <div class="mdc-circular-progress__determinate-container">
    <svg
      class="mdc-circular-progress__determinate-circle-graphic"
      :viewBox="viewbox"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle class="mdc-circular-progress__determinate-track"  v-bind="trackAttrs"/>
      <circle class="mdc-circular-progress__determinate-circle" v-bind="circleAttrs" />
    </svg>
  </div>
  <div class="mdc-circular-progress__indeterminate-container">
    <div class="mdc-circular-progress__spinner-layer" :class="colorClass(index)" v-for="index in colors" :key="index">

      <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
        <svg
          class="mdc-circular-progress__indeterminate-circle-graphic"
          :viewBox="viewbox"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle v-bind="indeterminateAttrs" />
        </svg>
      <!--must be no space between divs-->
      </div><div class="mdc-circular-progress__gap-patch">
        <svg
          class="mdc-circular-progress__indeterminate-circle-graphic"
          :viewBox="viewbox"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle v-bind="indeterminateAttrs" />
        </svg>
      </div><div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
        <svg
          class="mdc-circular-progress__indeterminate-circle-graphic"
          :viewBox="viewbox"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle v-bind="indeterminateAttrs" />
        </svg>
      </div>

    </div>
  </div>
</div>
</template>
