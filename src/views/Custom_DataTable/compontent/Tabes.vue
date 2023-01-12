<template>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation"  
      v-for="(item, i) in items"
      :key="i"
      @click="selected(item)">
      <button
        :class="item.activeCalss"
        :id="item.tabValue"
        data-bs-toggle="tab"
        :data-bs-target="`#${item.tabValue}`"
        type="button"
        role="tab"
        :aria-controls="item.tabValue"
        aria-selected="true"
      >
        {{item.name}}
      </button>
    </li>

  </ul>
  <slot v-for="(item, i) in items" :key="i" :name="item.tabValue"> </slot>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { TabModel } from "../Models/dataTable.model";

export default class Tabes extends Vue {
  @Prop() items: Array<TabModel>;

  public selected(item: any) {
    this.$emit("selectedTab", item);
  }
}
</script>
