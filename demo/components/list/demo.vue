<template>
  <div>
    <mdc-layout-grid class="mdc-demo mdc-demo--container mdc-list-demo">
      <mdc-layout-cell>
        <mdc-list @action="onAction">
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
        <mdc-list @action="onAction">
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
          <mdc-list @action="onAction">
            <mdc-list-item>
              <mdc-list-item-text primaryText="Photos"></mdc-list-item-text>
            </mdc-list-item>
          </mdc-list>

          <mdc-list-divider tag="div"></mdc-list-divider>
          <mdc-list-group-sub-header tag="h2">Recent files</mdc-list-group-sub-header>
          <mdc-list @action="onAction">
            <mdc-list-item>
              <mdc-list-item-text primaryText="Vacation"></mdc-list-item-text>
            </mdc-list-item>
          </mdc-list>
        </mdc-list-group>
      </mdc-layout-cell>

      <mdc-layout-cell>
        <mdc-list singleSelection @action="onAction">
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

    <mdc-caption>
      selected:
      <span class>{{ selected }}</span>
    </mdc-caption>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  methods: {
    onAction({ index }) {
      this.selected = index;
    },
  },
};
</script>


<style>
.demo-article .mdc-layout-grid {
  width: 100%;
}
</style>
