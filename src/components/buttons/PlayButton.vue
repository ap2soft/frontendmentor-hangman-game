<template>
  <button
    :class="
      twMerge(
        `rounded-full bg-pink-gradient p-10 uppercase tracking-wider text-white shadow-play-button outline-none transition hover:bg-pink-light-gradient focus:ring focus:ring-white/75`,
        classes
      )
    "
    v-bind="restAttrs"
  >
    <PlayIcon class="size-12 -translate-y-0.5 translate-x-0.5 drop-shadow-xl" />
    <span class="sr-only">Start game</span>
  </button>
</template>

<script setup>
import PlayIcon from '@/assets/icons/play-icon.svg'
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const { class: classes, ...restAttrs } = useAttrs()
</script>
