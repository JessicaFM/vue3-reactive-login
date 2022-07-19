<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core"; // TODO
import { useLoginStore } from "@/stores/loginStore.js"

const router = useRouter();
const userName = ref(null);
const loginStore = useLoginStore()

function checkForm() {
  loginStore.doLogin()
  .then((response) => {
    if(response.id) {
      router.push("/");
    }
  })
}
</script>

<template>
  <div id="login-view">
    <div class="mb-2">
      Login
    </div>
    <form id="login-form" @submit.prevent="checkForm">
      <div class="input-group mb-3">
        <input v-bind="userName" class="form-control" type="name" id="name" placeholder="name" />
      </div>
      <div class="input-group mb-3">  
        <button type="submit" class="btn btn-primary w-100">Submit</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  #login-view {
    #login-form {
      padding: 40px 30px;
      border: 1px solid #ccc;
    }  
  }
</style>
