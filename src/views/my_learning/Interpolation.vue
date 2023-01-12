<template>
  <div class="m-5">
    <h1>{{ interpolation }}</h1>

    <button :class="isShow ? 'btn btn-danger' : 'btn btn-success'" @click="handleClick">
      {{ isShow ? "Hide User" : "Show User" }}
    </button>
    <ul  class=" mt-4 list-group w-25" v-if="isShow">
      <li class="list-group-item bg-light" v-for="user in userData" :key="user.id">
        <p>Name : {{ user.name }}</p>
      </li>
    </ul>
    <p class="mt-3 alert alert-danger w-25" v-else>No User Data is here</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import axios from "axios";

export default class Interpolation extends Vue {
  interpolation= "Interpolation";
  isShow = false;
  userData:Array<any> = [
    { id: 1, name: "Movin" },
    { id: 2, name: "Guru" },
    { id: 3, name: "Hari" },
    { id: 4, name: "Mohan" },
  ];


  handleClick() {
    console.log("render again");
    return (this.isShow = !this.isShow);
  }

 
}
</script>