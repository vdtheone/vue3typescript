<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <TextInput label="email" :model-values="email" /> {{ email }}
            <TextInput label="password" :model-values="password" />
            <button>Submit</button>
        </form>
    
    </div>
</template>

<script lang="ts" setup>

import TextInput from '../components/TextInput.vue'
import { ref, } from 'vue';



const email = ref("data")
const password = ref("")

function handleSubmit() {
    console.log("called");
    console.log("Email = ",email.value);
    console.log("Password = ",password.value);
}

</script>



<style>


</style>