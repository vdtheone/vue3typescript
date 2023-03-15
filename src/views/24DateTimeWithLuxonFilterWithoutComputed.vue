<script lang="ts" setup>

import {ref}  from 'vue';
import { DateTime } from 'luxon';
import {Post,today,thisweek,thismonth} from "../posts";

const periods: Period[]=["Today","This Week","This Month"] as const
type Period = typeof periods[number] //"Today" | "This Week" | "This Month";

const selectedPeriod = ref<Period>("Today")
console.log(selectedPeriod)

function selectPeriod(period:Period) {
  console.log("called");
  selectedPeriod.value = period
}

const posts:Post[]=[today,thisweek,thismonth]
.map(post=>{
    return{
        ...post,created:DateTime.fromISO(post.created)
    }
})
.filter(post=>{
    console.log("selectedPeriod",selectedPeriod);

    if (selectedPeriod.value === "Today") {
    return post.created>= DateTime.now().minus({day:1})
  }
  if (selectedPeriod.value === "This Week") {
    return post.created>= DateTime.now().minus({week:1})
  }
  return post
    
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
        <h1>Not Working because posts are ref not computed</h1>

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

