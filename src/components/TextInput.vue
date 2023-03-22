

<template>
    <div>
        <label :for="label">{{ label }}</label>
        <input class="input" type="text" :id="label" :value="modelValues" @input="handleInputs" >
        {{ modelValues }}
    </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, defineEmits } from "vue";
defineProps<{
  label: string,
  modelValues:string,
}>()
const emit = defineEmits<{
  (event:'update:modelValues',value:string):void
}>()
// const emit = defineEmits(['update:modelValues']); 
function handleInputs(e:Event){
  const value = (e.target as HTMLInputElement).value
  console.log("handleInputs ",value);
  emit('update:modelValues',value)
  console.log("after emit ");

}
// const inputValue = computed({
//   // getter
//   get() {
//     console.log("props.modelValues = ",props.modelValues)
//     return props.modelValues

//   },
//   // setter
//   set(value:string) {
//     console.log("value:",value);
//     emit('update:modelValues',value) 
//   }
// })

// console.log("inputValue : ",inputValue.value); 



</script>


<style>
    .input{
        height: 25px;
        margin: 10px;
    }

</style>