<template>
  <div v-if="isSpace" class="h-16 w-8"></div>
  <div
    v-if="!isSpace"
    class="text-4xl inline-grid h-16 w-10 place-content-center rounded-lg bg-blue px-1 py-2 font-bold uppercase text-white shadow-blue-button"
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
