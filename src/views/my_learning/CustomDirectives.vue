<template>
  <div class="m-5">
    <h1 v-change-color="increment">Custom Directives </h1>
    <p >{{increment}}</p>
   <button type="button" class="btn btn-success" @click="increment++">+</button>

   <input type="text" class="form-control mt-3 w-25" v-custom-event:focus>
   <input type="text" class="form-control mt-3 w-25" v-custom-event>
   <h1 v-custom-event="'red'">onMouseover</h1>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import {createApp} from 'vue';

export default class CustomDirectives extends Vue {

    increment:number = 0;

}
</script>
