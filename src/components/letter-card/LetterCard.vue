<template>
  <div v-if="isSpace" class="h-16 w-8 md:h-28 md:w-20"></div>
  <div
    v-if="!isSpace"
    class="md:rounded-4xl inline-grid h-16 w-10 place-content-center rounded-lg bg-blue px-1 py-2 text-4xl font-bold uppercase text-white shadow-blue-button md:h-28 md:w-20 md:text-6xl"
    :class="{ 'opacity-25': !isOpened }"
  >
    {{ isOpened ? letter.value : '&nbsp;' }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  letter: Object,
})

const isSpace = computed(() => !props.letter.value)
const isOpened = computed(() => props.letter.opened)
</script>
