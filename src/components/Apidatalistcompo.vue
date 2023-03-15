<template>
    <div>
        <a class="panel">
            {{ post.title }}
            {{ post.id }}
        </a>
    </div>
</template>

<script lang="ts" setup>
import {UserIdPost} from '../posts'
import { defineProps } from 'vue'

defineProps<{
    post:UserIdPost
}>()

</script>

<style>
    
</style>