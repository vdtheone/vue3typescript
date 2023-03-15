<template>
    <div>
        <a v-for="period of periods"
        :key="period"
        :class="{'is-active':period==selectedPeriod}"
        @click="selectPeriod(period)">
        {{period}}</a>
    </div>
</template>

<script lang="ts" setup>
    
import { ref } from 'vue';

// const periods : Period[] = ['Today','ThisWeek','ThisMonth'] as const
// type Period = typeof periods[number]

const periods: Period[]=["Today","This Week","This Month"] as const
type Period = typeof periods[number] //"Today" | "This Week" | "This Month";

const selectedPeriod = ref<Period>("Today")
    console.log(selectedPeriod)

function selectPeriod(period:Period) {
    selectedPeriod.value = period
}


</script>

<style>
.is-active{
  font-size:20px;
  font-weight:bold;
  color:green;
}
</style>