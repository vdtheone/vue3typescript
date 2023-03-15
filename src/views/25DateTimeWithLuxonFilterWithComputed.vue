<script lang="ts" setup>

import { ref, computed }  from 'vue';
import { DateTime } from 'luxon';
import { TimelinePost,today,thisweek,thismonth } from "../posts";

const periods: Period[]=["Today","This Week","This Month"] as const
type Period = typeof periods[number] //"Today" | "This Week" | "This Month";

const selectedPeriod = ref<Period>("Today")


function selectPeriod(period:Period) {
  console.log("called");
  selectedPeriod.value = period   
}

const posts= computed<TimelinePost[]>(()=>{
  return [today,thisweek,thismonth]
.map(post=>{
  return{
    ...post,created:DateTime.fromISO(post.created)
  }
}) 
.filter(post=>{
  console.log("selectedPeriod =====",selectedPeriod.value);
  
  if (selectedPeriod.value === "Today") {
    console.log("IF============");
    return post.created >= DateTime.now().minus({day:1})
  }
  if (selectedPeriod.value === "This Week") {
    console.log("----------------");
    return post.created >= DateTime.now().minus({week:1})
  }
  return post
})
})

</script>

<template>
    <div>
        <a v-for="period of periods"
        :key="period"
        :class="{'is-active':period==selectedPeriod}"
        @click="selectPeriod(period)">
        {{period}}</a>
      

        <a v-for="post of posts"
         :key="post.id" class="panel">
         {{post.title}}
         {{post.created.toFormat("D MMM")}}
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

