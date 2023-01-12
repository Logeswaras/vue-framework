<template>
    <top-bar
      @search="searchFilter"
      :title="'User List (' + items.length + ')'"
      @filter="moreFilter"
      @addNewUser="createNewUser"
    ></top-bar>

    <data-table :headers="header" :items="items">
      <template v-slot:username="slotProps">
        <img
          :src="slotProps.item.image"
          alt="image"
          width="50"
          height="50"
          class="rounded-circle bg-dark"
          v-if="slotProps.item.image"
        />
        <span
          style="width: 50px"
          class="p-2 ps-3 pe-3 bg-secondary rounded-circle text-white"
          v-if="!slotProps.item.image"
          >{{ slotProps.item.firstName?.charAt(0).toUpperCase() }}</span
        >
        <span class="ms-4"
          >{{ slotProps.item.firstName }} {{ slotProps.item.lastName }}</span
        >
      </template>

      <template v-slot:action="slotProps">
        <div class="d-flex align-items-center justify-content-around">
          <edit-user @click="editUser(slotProps.item)"></edit-user>
          <delete-user @delete="deleteUser(slotProps.item)"></delete-user>
        </div>
      </template>

      <template v-slot:eyeColor="slotProps">
        <span
          :class="`${
            slotProps.item.eyeColor === 'Green'
              ? 'badge text-bg-success'
              : '' || slotProps.item.eyeColor === 'Gray'
              ? 'badge text-bg-secondary'
              : '' || slotProps.item.eyeColor === 'Brown'
              ? 'badge text-bg-warning'
              : '' || slotProps.item.eyeColor === 'Blue'
              ? 'badge text-bg-primary'
              : '' || slotProps.item.eyeColor === 'Amber'
              ? 'badge text-bg-info'
              : ''
          }`"
        >
          {{ slotProps.item.eyeColor }}
        </span>
      </template>
    </data-table>

    <div
      class="alert alert-danger w-50 text-center m-auto"
      role="alert"
      v-if="items.length === 0"
    >
      User Not Founds
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SideNavbar from "./compontent/Navbar.vue";
import DataTable from "./compontent/DataTable.vue";
import axios from "axios";
import { HeadersModel } from "./Models/dataTable.model";
import TopBar from "./compontent/TopBar.vue";
import EditUser from "./ListActions/EditUser.vue";
import DeleteUser from "./ListActions/DeleteUser.vue";

@Options({
  components: {
    SideNavbar,
    DataTable,
    TopBar,
    EditUser,
    DeleteUser,
  },
})
export default class UserList extends Vue {
  public items: Array<any> = [];
  public searchFilterItems: Array<any> = [];
  public header: Array<HeadersModel> = [
    {
      text: "NAME",
      value: "username",
      Headerclass: "bg-light fw-bold",
      ItemClass: "fw-bold text-muted p-6 align-middle mt-4",
    },
    {
      text: "EMAIL",
      value: "email",
      Headerclass: "bg-light fw-bold",
      ItemClass: "fw-bold text-muted p-6 align-middle",
    },
    {
      text: "DOMAIN",
      value: "domain",
      Headerclass: "bg-light fw-bold",
      ItemClass: "fw-bold text-muted p-6 align-middle",
    },
    {
      text: "HEIGHT",
      value: "height",
      Headerclass: "bg-light fw-bold",
      ItemClass: "fw-bold text-muted p-6 align-middle",
    },
    {
      text: "WEIGHT",
      value: "weight",
      Headerclass: "bg-light fw-bold",
      ItemClass: "fw-bold text-muted p-6 align-middle",
    },
    {
      text: "EYECOLOR",
      value: "eyeColor",
      Headerclass: "bg-light fw-bold",
      ItemClass: "fw-bold text-muted p-6 align-middle text-center",
    },
    {
      text: "ACTION",
      value: "action",
      Headerclass: "bg-light text-center  fw-bold",
      ItemClass: "align-middle fw-bold",
    },
  ];

  public fatchUser() {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        this.items = response.data.users;
        this.searchFilterItems = response.data.users;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Request failed with status code 404");
        }
      });
  }

  mounted() {
    this.fatchUser();
  }

  public editUser(item: any) {}

  public deleteUser(value: any) {
    // this.items = this.searchFilterItems.filter((item)=>{
    //   return item.id !== value.id;
    // })
  }

  public searchFilter(searchValue: string) {
    this.items = this.searchFilterItems.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.domain.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.height.toString().includes(searchValue.toString()) ||
        item.weight.toString().includes(searchValue.toString()) ||
        item.eyeColor.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }

  public moreFilter(value: any) {
    let firtNameValue =
      value.firstName.charAt(0).toUpperCase() + value.firstName.slice(1);

    let result = this.searchFilterItems.filter((item) => {
      return (
        item.firstName.includes(firtNameValue) &&
        item.lastName.includes(value.lastName) &&
        item.email.includes(value.email)
      );
    });
    if (result && firtNameValue.length > 0) {
      let URL = "https://dummyjson.com/users";
      return axios
        .get(`${URL}/filter?key=firstName&value=${firtNameValue}`)
        .then((response) => (this.items = response.data.users))
        .catch((error) => console.log(error));
    } else {
      this.items = this.searchFilterItems;
    }
    // console.log(result)
  }

  public createNewUser(value: any) {
    axios
      .post("https://dummyjson.com/users/add", {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        domain: value.domain,
        height: value.height,
        weight: value.weight,
        eyeColor: value.eyeColor,
      })
      .then((res) => {
        this.items.push(res.data);
        // console.log()
      })
      .catch((err) => console.log(err));
  }
}
</script>
