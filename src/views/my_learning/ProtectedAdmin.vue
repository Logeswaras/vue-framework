<template>
    <div class="m-5">
        <h1 class="alert alert-success">Protected page</h1>
        <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
    </div>
</template>

<script lang="ts">
import {useStore} from 'vuex'
import {Vue} from 'vue-class-component';

export default class ProtectedAdmin extends Vue{
    store=useStore();

    signOut(){
        this.store.dispatch('signout')
    }
}
</script>