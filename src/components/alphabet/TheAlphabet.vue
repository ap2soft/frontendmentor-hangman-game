<template>
  <div class="grid grid-cols-9 gap-x-2 gap-y-3">
    <ButtonWhite
      class="grid place-content-center"
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
