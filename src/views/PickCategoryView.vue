<template>
  <header class="flex items-center justify-between">
    <HeaderButton @click="emit('back')">
      <IconBack class="size-4" />
    </HeaderButton>
    <PickCategory class="w-2/3" />
  </header>

  <main class="mt-8 grid gap-4">
    <ButtonBlue
      v-for="category in categoriesList"
      :key="category"
      class="rounded-xl py-5 text-2xl"
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
