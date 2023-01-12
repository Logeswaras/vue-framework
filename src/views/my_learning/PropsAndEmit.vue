<template>
  <div>
    <h1>Nested Props</h1>
    <p class="w-50">{{ massage }} {{ childMsg }}</p>
    <button class="btn btn-success" @click="goToParent">Send parent</button>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class PropsAndEmit extends Vue {
  @Prop() massage: string | undefined;

  childMsg:string|undefined = "Massage From Child"

  public goToParent(){
    this.$emit("goParent",this.childMsg)
  }
}
</script>