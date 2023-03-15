<template>
    <div>
        {{ postStore.foo }}
        <button @click="postStore.updateFoo('Testing')">Click </button><br>
    
        <a v-for="period of periods" :key="period" :class="{ 'is-active': period === selectedPeriod }"
            @click="selectPeriod(period)">
            {{ period }}
        </a>
        <TimelineItem v-for="post of posts" :key="post.id" :post="post" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Post, today, thisweek, thismonth } from '../posts'
import { DateTime } from 'luxon';
import TimelineItem from '../components/26timelineItems.vue'
import { usePosts } from '../store/posts'

const postStore = usePosts()

const periods: Period[] = ["Today", "This Week", "This Month"] as const
type Period = typeof periods[number]

const selectedPeriod = ref<Period>("Today")

function selectPeriod(period: Period) {
    console.log("called")
    selectedPeriod.value = period
}

const posts: Post[] = computed(() => {
    return [today, thisweek, thismonth]
        .map(post => {
            return {
                ...post, created: DateTime.fromISO(post.created)
            }
        })
        .filter(post => {
            
            if (selectedPeriod.value === "Today") {
                console.log("post.created", post.created)
                console.log("minus", DateTime.now().minus({ day: 1 }))
                return post.created >= DateTime.now().minus({ day: 1 })
            }
            if (selectedPeriod.value === "This Week") {
                return post.created >= DateTime.now().minus({ week: 1 })
            }
            return post
        })
})

</script>

<style>
.is-active {
    font-size: 20px;
    font-weight: bold;
    color: green;
}
</style>