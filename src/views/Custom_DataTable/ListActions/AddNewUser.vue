<template>
  <pop-up-model
    :items="modelContenet"
    popupBtn="Add New User"
    popupTitle="Add New User"
    popupId="addNewUser"
    popupIcon="fa-regular fa-plus"
    popupIconColor="btn btn-primary"
    popupBtnColor="btn btn-primary"
    popupBtnText="ADD"
    @onClicked="addNewUser"
  >
    <template v-slot:newUser>
      <form>
        <div class="row g-2">
          <div class="col-md">
            <text-input
              label="First Name"
              inputType="text"
              placeholderLabel="First Name"
              @getInputData="newUserFirstName"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              label="Last Name"
              inputType="text"
              placeholderLabel="Last Name"
              @getInputData="newUserLastName"
            ></text-input>
          </div>
        </div>
        <div class="row g-2 mt-3">
          <div class="col-md">
            <text-input
              label="Email"
              inputType="email"
              placeholderLabel="Email"
              @getInputData="newUserEmail"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              label="Domain"
              inputType="text"
              placeholderLabel="Domain"
              @getInputData="newUserDomain"
            ></text-input>
          </div>
        </div>
        <div class="row g-2 mt-3">
          <div class="col-md">
            <text-input
              label="Height"
              inputType="number"
              placeholderLabel="Height"
              @getInputData="newUserHeight"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              label="Weight"
              inputType="'number'"
              placeholderLabel="Weight"
              @getInputData="newUserWeight"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              label="Eye Color"
              inputType="text"
              placeholderLabel="Eye Color"
              @getInputData="newUserEyeColor"
            ></text-input>
          </div>
        </div>
      </form>
    </template>
  </pop-up-model>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PopUpModel from "../compontent/PopUpModel.vue";
import TextInput from "../../../components/TextInput.vue";
import { ModelContentModel, NewUserModel } from "../Models/dataTable.model";

@Options({
  components: {
    PopUpModel,
    TextInput,
  },
})
export default class AddNewUser extends Vue {
  public modelContenet: Array<ModelContentModel> = [
    { name: "New User", value: "newUser" },
  ];

  public newUser: NewUserModel = {
    firstName: "",
    lastName: "",
    email: "",
    domain: "",
    height: 0,
    weight: 0,
    eyeColor: "",
  };

  public newUserFirstName(value: any) {
    this.newUser.firstName = value.target.value;
  }

  public newUserLastName(value: any) {
    this.newUser.lastName = value.target.value;
  }

  public newUserEmail(value: any) {
    this.newUser.email = value.target.value;
  }

  public newUserDomain(value: any) {
    this.newUser.domain = value.target.value;
  }

  public newUserHeight(value: any) {
    this.newUser.height = value.target.value;
  }

  public newUserWeight(value: any) {
    this.newUser.weight = value.target.value;
  }

  public newUserEyeColor(value: any) {
    this.newUser.eyeColor = value.target.value;
  }

  public addNewUser() {
    this.$emit("createUser", this.newUser);
  }
}
</script>
