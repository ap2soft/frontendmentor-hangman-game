<template>
  <section>
    <header class="flex items-center justify-between">
      <HeaderButton class="md:p-5" @click="emit('back')">
        <BackIcon class="size-4 md:size-6" />
      </HeaderButton>
      <div class="grow">
        <HowToPlay class="ml-auto h-16 md:mx-auto md:h-28" />
      </div>
    </header>

    <main class="mt-12 grid gap-6 md:gap-10 lg:grid-cols-3 lg:gap-4">
      <article
        v-for="rule in rules"
        :key="rule.number"
        class="rounded-2xl bg-white p-6 md:flex md:flex-row md:items-center md:gap-8 md:rounded-5xl md:p-10 lg:flex-col lg:gap-12 lg:py-12"
      >
        <span class="hidden text-7xl text-blue md:inline lg:text-[5.5rem]">
          {{ rule.number }}
        </span>

        <div class="flex flex-col gap-2 md:gap-6 lg:items-center">
          <h3 class="flex gap-3 text-2xl">
            <span class="text-blue md:hidden">{{ rule.number }}</span>
            <span
              class="uppercase tracking-wide text-dark md:text-[2.5rem] lg:text-5xl"
            >
              {{ rule.title }}
            </span>
          </h3>
          <p
            class="text-lavender md:text-[1.25rem] lg:mx-4 lg:text-center lg:text-2xl"
          >
            {{ rule.text }}
          </p>
        </div>
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
