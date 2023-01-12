<template>
  <div class="m-5">
    <h1>Props Parent to child</h1>
    <p class="w-50">{{ msg }}</p>
    <h3 class="text-danger">{{ disc }}</h3>

    <PropsAndEmit :massage="msg" @goParent="parentMsg"/>


  </div>
</template>

<script lang="ts">
import {Options, Vue } from 'vue-class-component';
import {Prop, Watch} from 'vue-property-decorator';
import PropsAndEmit from '@/views/my_learning/PropsAndEmit.vue';

@Options({
  components:{
    PropsAndEmit
  }
})

export default class HelloWorld extends Vue {
  @Prop() msg:string | undefined;

  disc:string|undefined = '';


  public parentMsg(event:string){
    this.disc = event
    this.$emit("mainParent",event)
  }
}
</script>
