<template>
  <pop-up-model
    popupTitle="Delete"
    popupId="deleteUser"
    popupIcon="fa-solid fa-trash fs-5 text-danger"
    popupIconColor="text-primary"
    popupBtnColor="btn btn-danger"
    popupBtnText="DELETE"
    :items="modelContenet"
    @onClicked="deleteUser"
    :action="deleteAction"
  >
    <template v-slot:deleteUser>
      <div class="">Are you sure about DELETE this User !</div>
    </template>
  </pop-up-model>
</template>
<script lang="ts">
import {Options, Vue } from "vue-class-component";
import PopUpModel from '../compontent/PopUpModel.vue';
import TextInput from '../../../components/TextInput.vue'
import { ModelContentModel } from "../Models/dataTable.model";
import { Prop } from "vue-property-decorator";

@Options({
    components:{
        PopUpModel,
        TextInput
    }
})

export default class DeleteUser extends Vue {

  @Prop() deleteAction:Array<any>;

  public modelContenet: Array<ModelContentModel> = [
    { name: "Delete User", value: "deleteUser" },
  ];

  public deleteUser(event:any){
    this.$emit('delete',event)
  }
}
</script>