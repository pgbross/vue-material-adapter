<template>
  <div>
    <mcw-layout-grid class="mcw-demo mcw-demo--container mcw-list-demo">
      <mcw-layout-cell>
        <mcw-list avatarList @action="onAction">
          <mcw-list-item data-mcw-dialog-action="test">test</mcw-list-item>
          <mcw-list-item data-mcw-dialog-action="help">help</mcw-list-item>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list @action="onAction">
          <mcw-list-item>Photos</mcw-list-item>
          <mcw-list-item>Recipes</mcw-list-item>
          <mcw-list-item>Work</mcw-list-item>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list twoLine @action="onAction">
          <mcw-list-item>
            <mcw-list-item-text primaryText="Photos" secondaryText="Jan 9, 2018"></mcw-list-item-text>
          </mcw-list-item>
          <mcw-list-item>
            <mcw-list-item-text primaryText="Recipes" secondaryText="Jan 17, 2018"></mcw-list-item-text>
          </mcw-list-item>
          <mcw-list-item>
            <mcw-list-item-text primaryText="Work" secondaryText="Jan 28, 2018"></mcw-list-item-text>
          </mcw-list-item>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list @action="onAction">
          <mcw-list-item>
            <mcw-list-item-graphic>
              <mcw-material-icon icon="folder"></mcw-material-icon>
            </mcw-list-item-graphic>
            <mcw-list-item-text primaryText="Photos"></mcw-list-item-text>
            <mcw-list-item-meta class="wiffle" test>
              <p>oomph</p>
            </mcw-list-item-meta>
          </mcw-list-item>
        </mcw-list>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list-group>
          <mcw-list-group-sub-header tag="h2">Folders</mcw-list-group-sub-header>
          <mcw-list @action="onAction">
            <mcw-list-item>
              <mcw-list-item-text primaryText="Photos"></mcw-list-item-text>
            </mcw-list-item>
          </mcw-list>

          <mcw-list-divider tag="div"></mcw-list-divider>
          <mcw-list-group-sub-header tag="h2">Recent files</mcw-list-group-sub-header>
          <mcw-list @action="onAction">
            <mcw-list-item>
              <mcw-list-item-text primaryText="Vacation"></mcw-list-item-text>
            </mcw-list-item>
          </mcw-list>
        </mcw-list-group>
      </mcw-layout-cell>

      <mcw-layout-cell>
        <mcw-list singleSelection @action="onAction">
          <mcw-list-item>
            <mcw-list-item-text primaryText="Photos"></mcw-list-item-text>
          </mcw-list-item>
          <mcw-list-item>
            <mcw-list-item-text primaryText="Recipes"></mcw-list-item-text>
          </mcw-list-item>
          <mcw-list-item>
            <mcw-list-item-text primaryText="Work"></mcw-list-item-text>
          </mcw-list-item>
        </mcw-list>
      </mcw-layout-cell>
    </mcw-layout-grid>

    <mcw-caption>
      selected:
      <span class>{{ selected }}</span>
    </mcw-caption>
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
.demo-article .mcw-layout-grid {
  width: 100%;
}
</style>
