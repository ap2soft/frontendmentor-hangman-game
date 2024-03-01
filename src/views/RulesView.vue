<template>
  <section>
    <header class="flex items-center justify-between">
      <HeaderButton @click="emit('back')">
        <BackIcon class="size-4" />
      </HeaderButton>
      <HowToPlay />
    </header>

    <main class="mt-12 grid gap-6">
      <article
        v-for="rule in rules"
        :key="rule.number"
        class="grid gap-4 rounded-2xl bg-white p-6"
      >
        <h3 class="flex gap-3 text-2xl">
          <span class="text-blue">{{ rule.number }}</span>
          <span class="uppercase tracking-wide text-dark">
            {{ rule.title }}
          </span>
        </h3>
        <p class="text-lavender">{{ rule.text }}</p>
      </article>
    </main>
  </section>
</template>

<script setup>
import HowToPlay from '@/assets/images/how-to-play.svg'
import HeaderButton from '@/components/buttons/HeaderButton.vue'
import BackIcon from '@/assets/icons/back-icon.svg'

const emit = defineEmits(['back'])

const rules = [
  {
    number: '01',
    title: 'Choose a category',
    text: 'First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.',
  },
  {
    number: '02',
    title: 'Guess letters',
    text: 'Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.',
  },
  {
    number: '03',
    title: 'Win or lose',
    text: 'You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.',
  },
]
</script>
