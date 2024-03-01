<template>
  <div class="flex flex-wrap justify-center gap-x-2 gap-y-3">
    <LetterCard
      v-for="letter in letters"
      :key="letter.value"
      :letter="letter"
    />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import LetterCard from '@/components/letter-card/LetterCard.vue'

const props = defineProps({
  theWord: String,
  usedLetters: Object,
})

const emit = defineEmits(['word-revealed'])

const letters = computed(() => {
  return props.theWord
    .toUpperCase()
    .split('')
    .map((letter) => ({
      value: letter === ' ' ? null : letter,
      opened: props.usedLetters.includes(letter),
    }))
})

const theWordIsRevealed = computed(
  () => letters.value.filter(({ opened }) => !opened).length === 0
)

watch(theWordIsRevealed, (value) => {
  if (value) {
    emit('word-revealed')
  }
})
</script>
