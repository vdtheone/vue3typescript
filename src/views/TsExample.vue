<template lang="">
    <div>
        <h1>TS example</h1>
        {{ periods}}
        <li v-for="i in periods" :key="i">
            {{i}}
        </li>
        {{data}}
    </div>
</template>
<script lang="ts" setup>

type Period = "test"
const periods : Period[]=["data","something",'test']

let data:number

data = "test"

</script>
<style lang="">
    
</style>