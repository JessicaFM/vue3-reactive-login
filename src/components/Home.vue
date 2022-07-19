<script setup>
import { storeToRefs } from 'pinia'
import { useLoginStore } from "@/stores/loginStore.js"
const { data }  = storeToRefs(useLoginStore())

</script>

<template>
  <div class="home-view">HELLO THIS IS HOME</div>
  <p>Double count is {{ data }}</p>
</template>
