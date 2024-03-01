<template>
  <header class="flex items-center justify-between gap-6">
    <div class="flex items-center gap-6">
      <HeaderButton @click="emit('select-category')">
        <MenuIcon class="size-4" />
      </HeaderButton>
      <h3 class="text-4xl text-white">{{ category }}</h3>
    </div>
    <TheProgress :progress="triesLeft" :total="maxTries" />
  </header>

  <main class="mt-12">
    <TheWord
      :the-word="theWord"
      :used-letters="usedLetters"
      @word-revealed="emit('win')"
    />

    <TheAlphabet
      :used-letters="usedLetters"
      @use-letter="useLetter"
      class="mt-16"
    />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import TheAlphabet from '@/components/alphabet/TheAlphabet.vue'
import HeaderButton from '@/components/buttons/HeaderButton.vue'
import MenuIcon from '@/assets/icons/menu-icon.svg'
import TheWord from '@/views/TheWord.vue'
import TheProgress from '@/components/progress/TheProgress.vue'

const props = defineProps({
  category: String,
  theWord: String,
})

const emit = defineEmits(['select-category', 'win', 'lose'])

const maxTries = ref(8)
const triesLeft = ref(8)

const usedLetters = ref([])
const useLetter = (letter) => {
  usedLetters.value.push(letter.toUpperCase())
  if (!props.theWord.toUpperCase().includes(letter)) {
    triesLeft.value--
  }
}

watch(triesLeft, (value) => {
  if (value === 0) {
    emit('lose')
  }
})
</script>
