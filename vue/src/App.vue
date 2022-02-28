<script setup lang="ts">
/**
 * > yarn create vite
 *
 * -> vue
 * -> vue-ts
 *
 * Done
 */

import { ref, computed, onMounted, PropType } from 'vue'
import { api, Cat } from './api'

const props = defineProps({
  defaultCount: {
    type: Number as PropType<number>,
    default: 0
  }
})

/**
 * Gestion du compteur
 */
const count = ref<number>(props.defaultCount)
const double = computed<number>(() => count.value * 2)
// const error = computed<number>(() => count.value.charAt(0)) // pas possible -> erreur, en js aucun souci même si ça fait plenter toute l'app

/**
 * Gestion du message
 */
const message = ref<string>('')

/**
 * Gestion des chats
 */
const cats = ref<Cat[]>([])
// const cats = ref([]) // Tableau de quoi ? En JS on ne pourrait pas connaitre le vrai type de valeur. En plus de ne pas être explicite ou clair, aucune erreur ou auto-complétion.

/**
 * Mounted
 */
onMounted(async () => {
  // message.value = 5 // pas possible -> erreur, en js aucun souci même si ça fait plenter toute l'app
  message.value = 'Apprend à compter'

  cats.value = await api.getCats()
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

    <hr>

    <section class="cats" v-if="cats.length">
      <h2>Cute cats</h2>

      <!-- v-text pour supprimer les whitespaces -->
      <pre v-text="JSON.stringify(cats, undefined, 4)" />
    </section>
  </div>
</template>