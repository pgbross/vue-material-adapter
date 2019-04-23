<template>
  <mdc-layout-grid class="mdc-demo mdc-demo--container mdc-list-demo">
    <mdc-layout-cell>
      <mdc-list>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Photos"></mdc-list-item-text>
        </mdc-list-item>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Recipes"></mdc-list-item-text>
        </mdc-list-item>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Work"></mdc-list-item-text>
        </mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>

    <mdc-layout-cell>
      <mdc-list>
        <mdc-list-item>
          <mdc-list-item-graphic>
            <mdc-material-icon icon="folder"></mdc-material-icon>
          </mdc-list-item-graphic>
          <mdc-list-item-text primaryText="Photos"></mdc-list-item-text>
          <mdc-list-item-meta class="wiffle" test>
            <p>oomph</p>
          </mdc-list-item-meta>
        </mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>

    <mdc-layout-cell>
      <mdc-list-group>
        <mdc-list-group-sub-header tag="h2">Folders</mdc-list-group-sub-header>
        <mdc-list>
          <mdc-list-item>
            <mdc-list-item-text primaryText="Photos"></mdc-list-item-text>
          </mdc-list-item>
        </mdc-list>

        <mdc-list-divider tag="div"></mdc-list-divider>
        <mdc-list-group-sub-header tag="h2">Recent files</mdc-list-group-sub-header>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Vacation"></mdc-list-item-text>
        </mdc-list-item>
      </mdc-list-group>
    </mdc-layout-cell>

    <mdc-layout-cell>
      <mdc-list singleSelection>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Photos"></mdc-list-item-text>
        </mdc-list-item>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Recipes"></mdc-list-item-text>
        </mdc-list-item>
        <mdc-list-item>
          <mdc-list-item-text primaryText="Work"></mdc-list-item-text>
        </mdc-list-item>
      </mdc-list>
    </mdc-layout-cell>
  </mdc-layout-grid>
</template>

<style>
.demo-article .mdc-layout-grid {
  width: 100%;
}
</style>
