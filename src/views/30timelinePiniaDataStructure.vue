<template>
    <div>
        <a v-for="period of periods" :key="period" :class="{ 'is-active': period === selectedPeriod }"
            @click="selectPeriod(period)">
            {{ period }}
        </a>
        <TimelineItem v-for="post of posts" :key="post.id" :post="post" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Post} from '../posts'
import { DateTime } from 'luxon';
import TimelineItem from '../components/26timelineItems.vue'
import { usePosts } from '../store/postsDataStructure'

const postStore = usePosts()

const periods: Period[] = ["Today", "This Week", "This Month"] as const
type Period = typeof periods[number]

const selectedPeriod = ref<Period>("Today")

function selectPeriod(period: Period) {
    console.log("called")
    selectedPeriod.value=period
}

const posts: Post[] = computed(() => {
    return postStore.ids
        .map(id => {
            const post = postStore.all.get(id)
            if (!post) {
                throw new Error(`Post with id of ${id} was expected but not found`);
            }
            return {
                ...post, created: DateTime.fromISO(post.created)
            }
        })
        .filter(post => {
            console.log("filter SelectedPeriod====", selectedPeriod.value)

            if (selectedPeriod.value == "Today") {
                console.log("inside Today if");
                console.log("post.created",post.created);
                // console.log("DateTime.now()",DateTime.now().minus({day:2}));
                console.log("DateTime.now()",DateTime.now());
                // return post.created >= DateTime.now().minus({ day: 1 })
                // return post.created>=DateTime.now().minus({day:1})
                return post.created>= DateTime.now().minus({day:1})

            }
            
            if (selectedPeriod.value == "This Week") {
                console.log("inside This Week if");
                return post.created >= DateTime.now().minus({ week: 1 })
            }
            console.log(post);
            
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