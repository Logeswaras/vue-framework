<template>
  <div class="bg-light p-3">
    <h1 class="fw-bolder">Customers</h1>
  </div>

  <div class="mt-2">
    <tabes :isSelected="selected" :items="tabs" @selectedTab="selectedTab">

      <template v-slot:activeCustomers>
          <data-table v-if="selected === 'activeCustomers'" :headers="header" :items="items"></data-table>
      </template>

      <template v-slot:inactiveCustomers>
          <data-table v-if="selected === 'inactiveCustomers'" :headers="header" :items="items">
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
                >{{ slotProps.item.firstName }}
                {{ slotProps.item.lastName }}</span
              >
            </template>
          </data-table>
      </template>

      <template v-slot:paidCustomers>
          <data-table v-if="selected === 'paidCustomers'" :headers="header" :items="items">
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
      </template>
      
    </tabes>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Tabes from "./compontent/Tabes.vue";
import { HeadersModel, TabModel } from "./Models/dataTable.model";
import DataTable from "./compontent/DataTable.vue";
import axios from "axios";

@Options({
  components: {
    Tabes,
    DataTable,
  },
})
export default class Customers extends Vue {
  public items: Array<any> = [];
  public searchFilterItems: Array<any> = [];
  public selected: string = "activeCustomers";

  public tabs: Array<TabModel> = [
    {
      name: "Active Customers",
      tabValue: "activeCustomers",
      activeCalss: "nav-link active",
    },
    {
      name: "Inactive Customers",
      tabValue: "inactiveCustomers",
      activeCalss: "nav-link",
    },
    {
      name: "Paid Customers",
      tabValue: "paidCustomers",
      activeCalss: "nav-link",
    },
  ];

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
      ItemClass: "fw-bold text-muted p-6 align-middle",
    },
  ];

  mounted() {
    this.fatchUser();
  }

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

  public selectedTab(item: any) {
    this.selected = item.tabValue;
  }
}
</script>
