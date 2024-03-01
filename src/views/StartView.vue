<template>
  <div class="grid h-full place-items-center">
    <ModalWindow class="w-full max-w-sm md:max-w-lg" open>
      <template #title>
        <Logo class="mx-auto w-2/3" />
      </template>
      <template #body>
        <div class="mt-8 grid place-items-center gap-8 pb-6">
          <PlayButton class="md:p-12" @click="emit('new-game')" />
          <ButtonBlue @click="emit('show-rules')" class="text-3xl">
            How to play
          </ButtonBlue>
        </div>
      </template>
    </ModalWindow>
  </div>
</template>

<script setup>
import ModalWindow from '@/components/modals/ModalWindow.vue'
import Logo from '@/assets/images/logo.svg'
import PlayButton from '@/components/buttons/PlayButton.vue'
import ButtonBlue from '@/components/buttons/ButtonBlue.vue'

const emit = defineEmits(['new-game', 'show-rules'])
</script>
