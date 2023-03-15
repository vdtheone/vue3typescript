<script lang="ts" setup>
import { DateTime } from 'luxon';
import TimelineItem from '../components/26timelineItems';
import {usePosts} from '../store/31ExtractingComplexity';
import {periods} from '../store/constants.ts';

const postStore = usePosts();


</script>
<template>
<div>
<a v-for="period of periods"
:key = "period"
:class = "{'is-active':period == postStore.selectedPeriod}"
@click="postStore.setSelectedPeriod(period)"
>
  {{ period }}
</a>


<TimelineItem v-for="post of postStore.filteredPost"
:key = "post.id" 
:post = "post"
/>
  
</div>
</template>

<style>

.is-active{
  font-size:20px;
  font-weight:bold;
  color:"green"
}
.panel{
  display:block;
  width:50%;
  margin:10px auto;
  padding:10px;
  box-shadow:2px 2px 8px grey
}
</style>