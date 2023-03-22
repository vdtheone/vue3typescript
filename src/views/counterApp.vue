<template>
    <main>
        <div>
            <h4>The current count is...</h4>
            <h1>{{ count }}</h1>
            <button @click="count--">-</button>
            <button @click="count++">+</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)

</script>

<style scoped>
    main{
        display: flex;
        justify-content: center;
        text-align: center;
        width: 100vh;
        height: 100vh;
        margin: auto;
    }
    div{
        font-size: 45px;
        text-align: center;
        justify-content: center;    
    }
    button{
        width: 100px;
        margin: 10px;
        height: 40px;
        background-color: darkgray;
        font-size: 35px;
        text-align: center;
    }
</style>