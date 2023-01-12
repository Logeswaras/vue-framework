<template>
  <div class="row m-5">
    <div class="col-4">
      <h1>List Rendering Of User</h1>
      <div class="mt-3 mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search User"
          v-model="searchUser"
        />
      </div>
      <div class="" v-if="getSearchUser.length">
        <ul
          class="list-group"
          v-for="(item, index) in getSearchUser"
          :key="index"
        >
          <li
            class="
              list-group-item
              bg-light
              mt-2
              mb-2
              d-flex
              justify-content-between
            "
          >
            <h4 class="">{{ item.name }}</h4>

            <router-link class="btn btn-primary" :to="`/list/${item.id}`"
              >Show Users</router-link
            >
          </li>
        </ul>
      </div>
      <p v-else class="mt-3 alert alert-danger">
        Search User Not Found for this :"{{ searchUser }}"
      </p>

      <p class="mt-3 alert alert-danger" v-if="error.length >= 1">
        {{ error }}
      </p>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";

import ItemDetials from "./ItemDetials.vue";

@Options({
  components: {
    ItemDetials,
  },
})
export default class ListRendering extends Vue {
  newUsers: Array<any> = [];
  error: string = "";
  searchUser: string = "";

  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        this.newUsers = response.data;
      })
      .catch((error: any) => {
        this.error = error.message;
      });
  }

  get getSearchUser() {
    if (this.searchUser.trim().length > 0) {
      return this.newUsers.filter((user) => {
        return user.name
          .toLowerCase()
          .includes(this.searchUser.trim().toLowerCase());
      });
    }

    return this.newUsers;
  }
}
</script>