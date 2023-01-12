<template>
  <div class="m-5">
    <h1>Event handling and Form input binding</h1>
    <div>
      <h3>
        Counter
        <span :class="counter >= 6 ? 'text-success' : 'text-danger'">{{
          counter
        }}</span>
      </h3>
      <button class="btn btn-success" type="button" @click="increment">
        +
      </button>
      <button class="btn btn-danger ms-4" type="button" @click="decrement">
        -
      </button>
    </div>
    <form @submit.prevent="handleSubmit">
      <h3>Name Result : {{ nameResult }}</h3>
      <div class="mb-3 w-25">
        <label class="form-label">V-Input :{{ firstName }}</label>
        <input
          type="text"
          class="form-control"
          placeholder="First Name"
          :value="firstName"
          @input="getInput"
        />
      </div>
      <div class="mb-3 w-25">
        <label class="form-label">V-Model :{{ lastName }}</label>
        <input
          type="text"
          class="form-control"
          placeholder="Last Name"
          v-model="lastName"
        />
      </div>
      <div class="mb-3 w-25">
        <label class="form-label">V-Blur</label>
        <input type="text" class="form-control" placeholder="V-Blur" @blur="handleBlur" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
  
  <script lang="ts">
import { Vue } from "vue-class-component";

export default class EventHandling extends Vue {
  counter = 0;
  firstName = "";
  lastName = "";
  nameResult = "";

  increment() {
    let count = this.counter++;
    if (count >= 10) {
      this.counter = 0;
    }
  }

  decrement() {
    let count = this.counter--;
    if (count <= 0) {
      this.counter = 0;
    }
  }


  getInput(event: any) {
    this.firstName = event.target.value;
  }

  handleSubmit() {
    this.nameResult = this.firstName + " " + this.lastName;

  }

  handleBlur(){
    this.firstName=this.firstName.toUpperCase()
  }
}
</script>