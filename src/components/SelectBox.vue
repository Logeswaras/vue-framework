<template>
  <div>
    <label class="form-label">{{ label }}</label>
    <select class="form-select"  @change="handleInput">
      <option selected>{{ label }}</option>
      <option v-for="(item, index) in selectValue" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class TextInput extends Vue {
  @Prop() label: string;
  @Prop() selectValue: Array<string>;


 handleInput(event:any){
    this.$emit("getInputData",event.target.value);
 }

}
</script>