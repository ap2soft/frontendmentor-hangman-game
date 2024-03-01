<template>
  <button
    :class="
      twMerge(
        `rounded-3xl bg-pink-gradient px-12 py-2 text-2xl uppercase tracking-wider text-white shadow-pink-button outline-none transition-shadow hover:bg-pink-light-gradient focus:ring focus:ring-white`,
        classes
      )
    "
    v-bind="restAttrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { twMerge } from 'tailwind-merge'
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const { class: classes, ...restAttrs } = useAttrs()
</script>
