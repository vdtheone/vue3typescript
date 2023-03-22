<template>
    <div>
        <input type="text" v-model="name" placeholder="enter anything" class="input">
        <br><br>    
        {{ name }}
        <br><br>

        <div contenteditable ref="contentEditable" @input="test()">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam omnis deleniti blanditiis delectus quaerat officia commodi, corporis aspernatur distinctio nostrum?Tenetur repellendus iste vitae voluptas eos! Fuga eaque iusto modi!
        </div>

        <!-- <p @click="dataclick($event)">d</p> -->

        <p>{{ data }}</p>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const data = ref()
const name = ref()
let contentEditable = ref<HTMLDivElement>()

function test() {
    console.log("called");
    data.value = contentEditable.value?.innerText
}
</script>

<style>
p {
    font-weight: bold;
    font-size: 15px;
}
</style>
