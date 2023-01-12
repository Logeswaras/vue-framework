<template>
  <div>
    <h1>User Detials</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Website</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userDetilas" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>
            <a :href="`http://${item.website}`" target="_blank">{{ item.website }}</a>
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click.prevent="$router.push('/list')">Hide User</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import { Vue } from "vue-class-component";

export default class ItemDetilas extends Vue {
  id: string | string[] = "";
  userDetilas: Array<any> = [];

  getUserDetilas() {
    this.id = this.$route.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${this.id}`)
      .then((response) => {
        this.userDetilas = response.data;
        console.log(response);
      });
    console.log(this.userDetilas);
  }

  created() {
    this.$watch(
      () => this.$route.params,
      () => this.getUserDetilas()
    );
    this.getUserDetilas();
  }
}
</script>