<template>
  <!-- <nav class="navbar bg-dark">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/event">Event Handling</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/first">Interpolation</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/list">List Rendering</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/about">About</router-link>
    </li>
  </nav> -->

  <nav class="navbar navbar-expand-lg bg-dark ">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-white fs-1 fw-bold" href="#">Website</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse "  id="navbarNavDropdown">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/event"
              >Event Handling</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/first"
              >Interpolation</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/list"
              >List Rendering</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/customdirectives">CustomDirectives</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Navbar extends Vue {}
</script>