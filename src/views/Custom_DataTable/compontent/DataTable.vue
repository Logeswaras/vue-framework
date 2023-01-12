<template>
  <table class="table border">
    <thead>
      <tr class="ps-3 pe-3">
        <td v-for="(header, i) in headers" :key="i" :class="header.Headerclass">
          {{ header.text }}
        </td>
      </tr>
    </thead>
    <tbody v-if="items">
      <tr v-for="(item, i) in items" :key="i" class="ps-3 pe-3">
        <td v-for="(header, i) in headers" :key="i" :class="header.ItemClass">
          <slot :name="header.value" :item="item">
            {{ item[header.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { HeadersModel } from "../Models/dataTable.model";


export default class DataTable extends Vue {
  @Prop() headers: Array<HeadersModel>;
  @Prop() items: Array<any>;
  @Prop() error:string;

}
</script>
