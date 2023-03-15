<template>
    <div>
        <a class="panel">
            {{ post.title }}
            {{ post.id }}
            {{ post.created.toFormat("D MMM") }}
        </a>
    </div>
</template>

<script lang="ts" setup>
import {TimelinePost} from '../posts'
import { defineProps } from 'vue'

defineProps<{
    post:TimelinePost
}>()

</script>

<style>
    
</style>