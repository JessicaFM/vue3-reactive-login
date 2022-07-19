<script setup>
    import { storeToRefs } from 'pinia'
    import { useLoginStore } from "@/stores/loginStore.js"

    const { data }  = storeToRefs(useLoginStore())

    if(!data.id) {
        return.push("/login");
    }
</script>