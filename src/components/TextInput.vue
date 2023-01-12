<template>
  <div>
    <label v-if="label" class="form-label">{{label}}</label>
    <input
      :type="inputType"
      class="form-control"
      :id="label"
      :placeholder="placeholderLabel"
      @input="handleInput"
    />
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import {Prop} from 'vue-property-decorator'

export default class TextInput extends Vue {

    @Prop() label?:string;
    @Prop() placeholderLabel?:string;
    @Prop() inputType:string;


 handleInput(event:any){
    this.$emit("getInputData",event);
 }

}
</script>