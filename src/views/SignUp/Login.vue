<template>
  <div class="mt-5">
    <form
      class="row m-auto w-25 border p-4 bg-light rounded shadow-lg"
      @submit.prevent="handleSubmit"
    >
      <div class="col-12 mb-3 text-center">
        <h1>Login</h1>
      </div>

      <div class="mb-3">
        <text-input
          label="Email"
          inputType="email"
          @getInputData="(event) => (request.email = event)"
        />
      </div>

      <div class="mb-3">
        <text-input
          label="Password"
          inputType="password"
          @getInputData="(event) => (request.password = event)"
        />
      </div>

      <div class="mb-3 mt-5">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TextInput from "@/components/TextInput.vue";
import store from "@/store";

@Options({
  components: {
    TextInput,
  },
})
export default class SignUp extends Vue {

  public request: any = {
    email: "",
    password: "",
  };

  handleSubmit() {
    store.dispatch('login',this.request)
  }
  
}
</script>