<template>
  <input
    type="file"
    class="d-none"
    ref="file"
    accept="image/*"
    @change="changeImage"
  />
  <img
    :src="imageUrl"
    alt="Profile Image"
    class="rounded-circle m-auto d-block bg-success"
    width="70"
    height="70"
    @click.prevent="uploadImage"
  />
  <span class="text-center d-block">Profile Photo</span>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AvatarInput extends Vue {
     imageUrl: string = "";

  updated() {
    this.uploadImage();
  }
  
  public uploadImage() {
    (this.$refs.file as HTMLInputElement).click();
  }

  public changeImage(event: any) {
    let reader = new FileReader();
    console.log(reader.readAsDataURL(event.target.file[0]));
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
  }
}
</script>
