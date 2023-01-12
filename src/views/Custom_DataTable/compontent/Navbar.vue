<template>
    <div class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column " id="sidebar">
    <ul class="nav flex-column w-100">
      <h3 class="my-2 fs-2 fw-1 text-center">
        Untitled UI
      </h3>
      <router-link to="/" class="nav-link">
        <i class="fa-solid fa-house-user"></i>
        <span class="mx-2">Home</span>
      </router-link>
      <router-link to="/customers" class="nav-link">
        <i class="fa-solid fa-house-user"></i>
        <span class="mx-2">Customers</span>
      </router-link>
    </ul>

  </div>

</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import './navbar.css'

export default class Navbar extends Vue {}
</script>