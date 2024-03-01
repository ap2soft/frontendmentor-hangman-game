<template>
  <div
    class="md:bg-tablet h-dvh bg-mobile bg-cover bg-center bg-no-repeat px-4 py-4 md:px-8 md:py-10"
  >
    <StartView
      v-if="currentView === VIEWS.START"
      @new-game="startNewGame"
      @show-rules="showRules"
    />

    <RulesView v-if="currentView === VIEWS.RULES" @back="gotoStart" />

    <GameView v-if="currentView === VIEWS.GAME" @back="gotoStart" />
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
