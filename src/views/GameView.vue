<template>
  <PickCategoryView
    v-if="!selectedCategory"
    :categories-list="categoriesList"
    @select-category="selectCategory"
    @back="emit('back')"
  />

  <GuessWordView
    v-if="selectedCategory && theWord"
    :key="theWord"
    :category="selectedCategory"
    :the-word="theWord.name"
    @select-category="pickCategories"
    @win="showYouWinModal"
    @lose="showYouLoseModal"
  />

  <ModalWindow :open="win || lose" class="min-h-48">
    <template #title>
      <YouWinText v-if="win" class="mx-auto w-2/3 md:w-1/2" />
      <YouLoseText v-if="lose" class="mx-auto w-2/3 md:w-1/2" />
    </template>
    <template #body>
      <div class="grid place-items-center gap-4 md:gap-8">
        <ButtonBlue class="md:text-4xl" @click="continueGame">
          Continue
        </ButtonBlue>
        <ButtonBlue class="md:text-4xl" @click="pickCategories">
          New category
        </ButtonBlue>
        <ButtonPink class="md:text-4xl" @click="quitGame">
          Quit game
        </ButtonPink>
      </div>
    </template>
  </ModalWindow>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import PickCategoryView from '@/views/PickCategoryView.vue'
import GuessWordView from '@/views/GuessWordView.vue'
import ModalWindow from '@/components/modals/ModalWindow.vue'
import YouWinText from '@/assets/images/you-win.svg'
import YouLoseText from '@/assets/images/you-lose.svg'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import ButtonPink from '@/components/buttons/ButtonPink.vue'

const emit = defineEmits(['back'])

const categoriesData = ref({})
const categoriesList = computed(() => Object.keys(categoriesData.value ?? {}))

const loadCategories = async () => {
  const { categories } = await (await fetch('data.json')).json()
  categoriesData.value = categories
}
onMounted(() => loadCategories())

const selectedCategory = ref()
const theWord = ref()
const selectCategory = (category) => {
  selectedCategory.value = category
  selectRandomWord()
}
const selectRandomWord = () => {
  const words = categoriesData.value[selectedCategory.value].filter(
    ({ selected }) => !selected
  )
  const randomIndex = Math.floor(Math.random() * words.length)
  theWord.value = words[randomIndex]
  // Mark the word as used
  words[randomIndex].selected = true
}

const reset = () => {
  win.value = false
  lose.value = false
  selectedCategory.value = null
  theWord.value = null
}

const pickCategories = () => {
  reset()
}

const win = ref(false)
const lose = ref(false)

const showYouWinModal = () => {
  win.value = true
}
const showYouLoseModal = () => {
  lose.value = true
}

const continueGame = () => {
  win.value = false
  lose.value = false
  selectRandomWord()
}

const quitGame = () => {
  reset()
  // ModalWindow on the start page is not shown without this 😶‍🌫️
  setTimeout(() => emit('back'), 500)
}
</script>
