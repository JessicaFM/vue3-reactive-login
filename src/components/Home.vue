<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useLoginStore } from "@/stores/loginStore.js"

const router = useRouter()
const loginStore = useLoginStore()
const { data }  = storeToRefs(loginStore)

function logOut() {
  loginStore.$reset()
  router.push("/login")
}
</script>

<template>
  <div class="container">
      <div class="w-100 home-view">
        <h3>Home</h3>
      </div> 
      <div class="w-100">
        <div>ID: {{ data.id }}</div>
        <div>EMAIL: {{ data.email }}</div>
        <div>FIRST NAME: {{ data.first_name }}</div>
        <div>LAST NAME: {{ data.last_name }}</div>
        <div><img :src="data.avatar" /></div>
      </div>
      <div class="w-100 pt-4">
        <button @click="logOut">Log Out</button>
      </div>
  </div>
  
</template>
