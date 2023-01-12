<template>
<div class="contaniner">
    <div class="row gx-0">
      <div class="col-lg-2">
        <SideNavbar />
      </div>
      <div class="col-lg-10 ps-1">
        <router-view/>
      </div>
    </div>
</div>
  
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import store from './store';
// import Navbar from './components/Navbar.vue'
import SideNavbar from './views/Custom_DataTable/compontent/Navbar.vue'

@Options({
  components:{
    SideNavbar
  }
})
export default class App extends Vue{

}
  
</script>

<style lang="scss">


</style>
