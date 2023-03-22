<template>
    <main>
        <div v-if="showModal" class="overlay">
            <div class="model">
                <textarea v-model.trim="newNote" name="notes" id="notes" cols="30" rows="10"></textarea>
                <p v-if="errorMessage">{{ errorMessage }}</p>
                <button @click="addNotes()">Add Notes</button>
                <button @click="showModal = false" class="close">Close</button>

            </div>
        </div>
        <div class="container">
            <header>
                <h1>Notes</h1>
                <button @click="showModal = true">+</button>
            </header>
            <div class="cards-container">
                <div v-for="note in notes" :key="note.id" class="card" :style="{ backgroundColor: note.backgroundcolor }">
                    <p class="main-text">{{ note.text }}</p>
                    <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showModal = ref(false)
const newNote = ref("")
const notes = ref([])
const errorMessage = ref("")

function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ",100%,75%)";
}

const addNotes = () => {
    if (newNote.value.length < 10) {
        return errorMessage.value = "The Note should be more than 10 or more character"

    }
    notes.value.push({
        id: Math.floor(Math.random() * 10000000),
        text: newNote.value,
        date: new Date(),
        backgroundcolor: getRandomColor()
    })
    showModal.value = false
    newNote.value = ""
    errorMessage.value = ""
    console.log(notes.value)
}
</script>

<style scoped>
main {
    height: 100vh;
    width: 99vw;
}

.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
    color: black;
}

header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
}

.card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 2px;
    line-height: 150%;
}

.date {
    font-size: 12.5px;
    font-weight: bold;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.model {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.model button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
}

.model .close {
    background-color: red;
    margin-top: 7px;
}

.model p {
    color: red;
}

.cards-container button{
 
    /* padding: 10px 20px; */
    font-size: 20px;
    width: 50%;
    background-color: blueviolet;
    border: none;
    border-radius: 7px;
    color: white;
    cursor: pointer;
    margin-left: 55px;
}
</style>