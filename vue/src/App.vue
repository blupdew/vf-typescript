<script setup lang="ts">
import { ref, computed, onMounted, PropType } from 'vue'

const props = defineProps({
  defaultCount: {
    type: Number as PropType<number>,
    default: 0
  }
})

const count = ref<number>(props.defaultCount)

const double = computed<number>(() => count.value * 2)
// const error = computed<number>(() => count.value.charAt(0)) // pas possible -> erreur, en js aucun souci

const message = ref<string>('')

onMounted(() => {
  // message.value = 5 // pas possible -> erreur, en js aucun souci
  message.value = 'Apprend à compter'
})
</script>

<template>
  <!--
    Avec l'extension Volar, TS fonctionne aussi dans le template !
    Ça veut dire de l'auto-complétion (et de la validation) dans les props par exemple
  -->
  <div>
    <h1>{{ message }}</h1>
    <p>{{ count }}</p>
    <button v-on:click="count++">+1</button>
    <button v-on:click="count--">-1</button>

    <p>Double: {{ double }}</p>
  </div>
</template>