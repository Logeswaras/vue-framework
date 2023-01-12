<template>
  <pop-up-model
    :items="modelContenet"
    popupTitle="Edit"
    popupId="editUser"
    popupIcon="fa-solid fa-pen-to-square fs-5"
    popupIconColor="text-primary"
    popupBtnColor="btn btn-primary"
    popupBtnText="EDIT"
  >
    <template v-slot:editUser>
      <form>
        <div class="row g-2">
          <div class="col-md">
            <text-input
              inputType="text"
              placeholderLabel="First Name"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              inputType="text"
              placeholderLabel="Last Name"
            ></text-input>
          </div>
        </div>
        <div class="row g-2 mt-3">
          <div class="col-md">
            <text-input
              inputType="email"
              placeholderLabel="Email"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              inputType="text"
              placeholderLabel="Domain"
            ></text-input>
          </div>
        </div>
        <div class="row g-2 mt-3">
          <div class="col-md">
            <text-input
              inputType="number"
              placeholderLabel="Height"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              inputType="'number'"
              placeholderLabel="Weight"
            ></text-input>
          </div>
          <div class="col-md">
            <text-input
              inputType="text"
              placeholderLabel="Eye Color"
            ></text-input>
          </div>
        </div>
      </form>
    </template>
  </pop-up-model>
</template>
<script lang="ts">
import {Options, Vue } from "vue-class-component";
import PopUpModel from '../compontent/PopUpModel.vue';
import TextInput from '../../../components/TextInput.vue'
import { ModelContentModel } from "../Models/dataTable.model";

@Options({
    components:{
        PopUpModel,
        TextInput
    }
})

export default class EditUser extends Vue {
  public modelContenet: Array<ModelContentModel> = [
    { name: "Edit User", value: "editUser" },
  ];
}
</script>