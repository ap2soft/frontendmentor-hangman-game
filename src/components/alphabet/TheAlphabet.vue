<template>
  <div class="grid grid-cols-9 gap-x-2 gap-y-3 md:gap-x-3 md:gap-y-4">
    <ButtonWhite
      class="grid place-content-center md:rounded-3xl md:py-5 md:text-5xl"
      v-for="letter in letters"
      :key="letter.value"
      @click="emit('use-letter', letter.value)"
      :disabled="letter.used"
    >
      {{ letter.value }}
    </ButtonWhite>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ButtonWhite from '@/components/buttons/ButtonWhite.vue'

const props = defineProps({
  usedLetters: Array,
})

const emit = defineEmits(['use-letter'])

const letters = computed(() =>
  'abcdefghijklmnopqrstuvwxyz'
    .toUpperCase()
    .split('')
    .map((letter) => ({
      value: letter,
      used: props.usedLetters.includes(letter),
    }))
)
</script>
