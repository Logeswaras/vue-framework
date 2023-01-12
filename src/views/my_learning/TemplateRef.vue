<template>
  <div class="m-5">
    <div class="row">
    <input type="text" placeholder="Ref" ref="tempRef" />
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue } from "vue-class-component";
import { Ref } from "vue-property-decorator";

export default class TemplateRef extends Vue {
//   @Ref("tempRef") readonly input : HTMLButtonElement;

  mounted() {
    const val = ((this.$refs.tempRef as HTMLInputElement).readOnly = true);
    console.log(val);
  }
}
</script>