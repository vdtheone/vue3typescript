<template>
    <div>
        Testing <br><br>
        <MyButton class="btn"></MyButton>
        <About />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from '../components/fallthroughButton.vue'; // @ is an alias to /src
import About from '../views/AboutView.vue'

export default defineComponent({
  name: 'fallthrough',
  components: {
    MyButton,
    About
  }
});

</script>

<style>
.btn{
  background-color: brown;
  color: blue;
}
</style>
