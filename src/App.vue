<template>
  <div
    class="h-dvh bg-mobile bg-cover bg-center bg-no-repeat px-4 py-4 md:bg-tablet md:px-8 md:py-10 lg:bg-desktop"
  >
    <h1 class="sr-only">Hangman game</h1>
    <div class="lg:mx-auto lg:max-w-[90rem]">
      <StartView
        v-if="currentView === VIEWS.START"
        @new-game="startNewGame"
        @show-rules="showRules"
      />

      <RulesView v-if="currentView === VIEWS.RULES" @back="gotoStart" />

      <GameView v-if="currentView === VIEWS.GAME" @back="gotoStart" />
    </div>
  </div>
</template>

<script setup>
import StartView from '@/views/StartView.vue'
import { ref } from 'vue'
import RulesView from '@/views/RulesView.vue'
import GameView from '@/views/GameView.vue'

const VIEWS = {
  START: 'start',
  RULES: 'rules',
  GAME: 'game',
}

const currentView = ref(VIEWS.START)

const startNewGame = () => {
  currentView.value = VIEWS.GAME
}

const showRules = () => {
  currentView.value = VIEWS.RULES
}

const gotoStart = () => {
  currentView.value = VIEWS.START
}
</script>
