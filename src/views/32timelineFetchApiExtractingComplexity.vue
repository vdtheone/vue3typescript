<script lang="ts" setup>
import Apidatalistcompo from '../components/Apidatalistcompo';
import {usePosts} from '../store/32fetchPostAPI';
import {periods,userids} from '../store/constants.ts';

const postStore = usePosts();

postStore.fetchPosts()

console.log("postStore.filteredPost ===  ",postStore.filteredPost);

</script>
<template>
<div>
<a v-for="period of userids"
:key = "period"
:class = "{'is-active':period == postStore.selectedPeriod}"
@click="postStore.setSelectedPeriod(period)"
>
  {{ period }}
</a>


<Apidatalistcompo v-for="post of postStore.filteredPost"
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