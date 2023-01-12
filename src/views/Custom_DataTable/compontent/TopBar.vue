<template>
  <div class="d-flex align-items-center bg-dark text-white p-4">
    <div class="col-3">
      <h3 class="fw-bolder">
        {{ title }}
        <i class="fa-solid fa-user text-success fs-4 text-white"></i>
      </h3>
    </div>

    <div class="col-5 d-flex justify-content-around align-items-center">
      <pop-up-model
        popupBtn="More Filter"
        popupTitle="More Filter"
        popupId="moreFilter"
        popupIcon="fa-solid fa-filter text-white"
        popupIconColor="btn btn-primary"
        popupBtnColor="btn btn-primary"
        popupBtnText="Filter"
        :items="modelContenet"
        @onClicked="moreFilter"
      >
        <template v-slot:moreFilter>
          <form>
            <div class="row g-2">
              <div class="col-md">
                <text-input
                  label="First Name"
                  inputType="text"
                  placeholderLabel="Search FirstName..."
                  @getInputData="searchMoreFilterFName"
                ></text-input>
              </div>
              <div class="col-md">
                <text-input
                  label="Last Name"
                  inputType="text"
                  placeholderLabel="Last Name"
                  @getInputData="searchMoreFilterLName"
                ></text-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md">
                <text-input
                  label="Email"
                  inputType="email"
                  placeholderLabel="Search Email..."
                  @getInputData="searchMoreFilterEmail"
                ></text-input>
              </div>
             
            </div>
          </form>
        </template>
      </pop-up-model>

      <text-input
        inputType="text"
        placeholderLabel="Search..."
        @getInputData="searchFilter"
      ></text-input>
    </div>

    <div class="col-4 d-flex justify-content-around">
      <button type="button" class="btn btn-success">
        <i class="fa-solid fa-file-import"></i> Import
      </button>

      <add-new-user @createUser="addNewUserList"></add-new-user>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import TextInput from "../../../components/TextInput.vue";
import { ModelContentModel,FilterUserValue } from "../Models/dataTable.model";
import PopUpModel from "./PopUpModel.vue";
import AddNewUser from "../ListActions/AddNewUser.vue";

@Options({
  components: {
    PopUpModel,
    TextInput,
    AddNewUser,
  },
})
export default class TopBar extends Vue {
  @Prop() title: string;

  public filtervalue:FilterUserValue={
    firstName:'',
    lastName:'',
    email:''
  };

  public modelContenet: Array<ModelContentModel> = [
    {
      name: "More Filter",
      value: "moreFilter",
    },
  ];

  public searchFilter(value: any) {
    this.$emit("search", value.target.value);
  }

  

  public searchMoreFilterFName(event:any){
    this.filtervalue.firstName = event.target.value;
  }
  
  public searchMoreFilterLName(event: any) {
    this.filtervalue.lastName = event.target.value;
  }
  
  public searchMoreFilterEmail(event: any) {
    this.filtervalue.email =event.target.value;
  }

  public moreFilter() {
    this.$emit("filter", this.filtervalue);
    // console.log(this.filtervalue)
  }

  public addNewUserList(value:any){
    this.$emit('addNewUser',value)
  }

}
</script>
