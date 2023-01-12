<template>
  <div class="mt-4 mb-4">
    <form
      class="row m-auto w-50 border p-4 bg-light rounded shadow-lg"
      @submit.prevent="handleSubmit"
    >
      <div class="col-12 mb-3 text-center">
        <h1>Signup Form</h1>
      </div>

      <div class="col-6 mb-3">
        <text-input
          label="First Name"
          inputType="text"
          @getInputData="(value) => (request.firstName = value)"
        />
      </div>

      <div class="col-6 mb-3">
        <text-input
          label="Last Name"
          inputType="text"
          @getInputData="(event) => (request.lastName = event)"
        />
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

      <div class="mb-3">
        <text-input
          label="Phone"
          inputType="text"
          @getInputData="(event) => (request.phone = event)"
        />
      </div>

      <div class="mb-3">
        <select-box
          label="Select State"
          :selectValue="selectBoxValue"
          @getInputData="(event) => (request.state = event)"
        />
      </div>

      <div class="mb-3 mt-5">
        <button type="submit" class="btn btn-primary">Submit From</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TextInput from "@/components/TextInput.vue";
import SelectBox from "@/components/SelectBox.vue";
import store from "@/store";

@Options({
  components: {
    TextInput,
    SelectBox,
  },
})
export default class SignUp extends Vue {
  public selectBoxValue: Array<string> = [
    "Tamil Nadu",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
  ];

  public request: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    state: "",
  };

  handleSubmit() {
    store.dispatch('login',this.request)
  }
}
</script>