<template>
  <div >
    <h1 class="m-5">Come from nested child :<span v-if="disc.length >= 1" class="text-danger">{{ disc }}</span></h1>
    <HelloWorld :msg="massage" @mainParent="topParent"/>
    <!-- <FirstClassComp />
    <ListRendering/>
    <EventHandling/> -->
    <template-ref ref="mainRef"></template-ref>

  </div>
</template>

<script lang="ts">
import { Options, Vue} from "vue-class-component";

import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import FirstClassComp from "./FirstClassComp.vue";
// import ListRendering from "./ListRendering.vue";
// import EventHandling from './EventHandling.vue';
import TemplateRef from './TemplateRef.vue';

@Options({
  components: {
    HelloWorld,
    // FirstClassComp,
    // ListRendering,
    // EventHandling
    TemplateRef
  },
})


export default class HomeView extends Vue {
  massage:string|undefined = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit impedit pariatur facere mollitia et expedita architecto distinctio doloremque quidem nulla. Voluptates ex perspiciatis ratione odit provident quo quaerat tenetur quasi.";

  disc:string = '' ;

  topParent(event:string){
    this.disc = event 
  }
  
  mounted(){
    console.log(this.$refs.mainRef);
  }
  // Create one componet
  // Interpolation
  // Contional rendering
  // Child import and display it.
}
</script>
