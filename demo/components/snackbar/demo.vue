<template>
  <div class="mcw-demo">
    <section>
      <div class="mcw-demo mcw-demo--container">
        <mcw-button @click="showSimple">{{
          open ? 'Close' : 'Simple'
        }}</mcw-button>
        <mcw-button @click="showBaseline">Baseline</mcw-button>
        <mcw-button @click="showLeading">Leading</mcw-button>
        <mcw-button @click="showStacked">Stacked</mcw-button>
      </div>
    </section>
    <div v-if="reason" class="mdc-typography--caption">
      Result:
      <span class>{{ reason }}</span>
    </div>
    <mcw-snackbar-queue
      ref="bar"
      v-model:snack="snack"
      @update:reason="onReason"
    />
    <mcw-snackbar
      v-model="open"
      message="Simple message"
      :dismiss-action="false"
      @update:reason="onReason"
    ></mcw-snackbar>
  </div>
</template>

<script src="./snackbar.js"></script>
