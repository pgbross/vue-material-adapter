<template>
  <mdc-layout-grid class="mdc-demo mdc-demo--container">
    <mdc-layout-cell>
      <mdc-list dense bordered interactive>
        <mdc-list-item>Single-line item</mdc-list-item>
        <mdc-list-item>Single-line item</mdc-list-item>
        <mdc-list-divider></mdc-list-divider>
        <mdc-list-item>Single-line item</mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>

    <mdc-layout-cell>
      <mdc-list two-line dense bordered>
        <mdc-list-item>
          <span>First line</span>
          <span slot="secondary">Second line</span>
        </mdc-list-item>
        <mdc-list-item>
          <span>First line</span>
          <span slot="secondary">Second line</span>
        </mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>

    <mdc-layout-cell>
      <mdc-list dense bordered interactive>
        <mdc-list-item>
          <i slot="start-detail" class="material-icons mdc-list-item__graphic">favorite_border</i>
          start details
        </mdc-list-item>
        <mdc-list-item>
          end details
          <i slot="end-detail" class="material-icons mdc-list-item__meta">star_border</i>
        </mdc-list-item>

        <mdc-list-item>
          <i slot="start-detail" class="material-icons mdc-list-item__graphic">favorite_border</i>
          both details
          <i
            slot="end-detail"
            class="material-icons mdc-list-item__meta"
          >star_border</i>
        </mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>

    <mdc-layout-cell>
      <mdc-list dense bordered interactive>
        <mdc-list-item>
          <div slot="start-detail" class="mdc-list-item__graphic">
            <mdc-radio name="wiffle"></mdc-radio>
          </div>start details
        </mdc-list-item>
        <mdc-list-item>
          end details
          <div slot="end-detail" class="mdc-list-item__meta">
            <mdc-radio name="wiffle"></mdc-radio>
          </div>
        </mdc-list-item>
        <mdc-list-item>
          <i slot="start-detail" class="material-icons mdc-list-item__graphic">favorite_border</i>
          both details
          <i
            slot="end-detail"
            class="material-icons mdc-list-item__meta"
          >star_border</i>
        </mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>
  </mdc-layout-grid>
</template>
