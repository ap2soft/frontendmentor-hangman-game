<template>
  <header class="flex items-center justify-between gap-8">
    <HeaderButton class="md:p-5" @click="emit('back')">
      <IconBack class="size-4 md:size-6" />
    </HeaderButton>
    <div class="grow">
      <PickCategory class="w-2/3 lg:mx-auto lg:max-w-3xl" />
    </div>
  </header>

  <main class="mt-8 grid gap-4 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
    <ButtonBlue
      v-for="category in categoriesList"
      :key="category"
      class="rounded-xl py-5 text-2xl md:rounded-5xl md:py-16 md:text-5xl"
      @click="emit('select-category', category)"
    >
      {{ category }}
    </ButtonBlue>
  </main>
</template>

<script setup>
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'
import PickCategory from '@/assets/images/pick-category.svg'
import HeaderButton from '@/components/buttons/HeaderButton.vue'
import IconBack from '@/assets/icons/back-icon.svg'

defineProps({
  categoriesList: Array,
})
const emit = defineEmits(['back', 'select-category'])
</script>
