<script lang="ts" setup>

import {Post,today,thisweek,thismonth} from '../posts.ts'
import { ref } from 'vue';
import { DateTime } from 'luxon';

const periods: Period[]=["Today","This Week","This Month"] as const
type Period = typeof periods[number] //"Today" | "This Week" | "This Month";

const selectedPeriod = ref<Period>("Today")
    console.log(selectedPeriod)

function selectPeriod(period:Period) {
    selectedPeriod.value = period
}

const posts:Post[]=[today,thisweek,thismonth].map(post=>{
    return{
        ...post,created:DateTime.fromISO(post.created)

    }
})

</script>

<template>
    <div>
        <a v-for="period of periods"
        :key="period"
        :class="{'is-active':period==selectedPeriod}"
        @click="selectPeriod(period)">
        {{period}}</a>
        <br><br>

        <a v-for="post of posts"
        class="panel"
         :key="post.id">
         {{post.title}}
         {{post.created.toFormat("d MMM")}}
        </a>

            
    </div>
</template>


<style>
.is-active{
  font-size:20px;
  font-weight:bold;
  color:green;
}

.panel{
  display:block;
  width:50%;
  margin:10px auto;
  padding:10px;
  box-shadow:2px 2px 8px grey
}
</style>

