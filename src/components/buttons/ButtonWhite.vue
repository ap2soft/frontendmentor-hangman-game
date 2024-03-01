<template>
  <button
    :class="
      twMerge(
        `text-2xl flex place-content-center rounded-lg bg-white px-1 py-3 uppercase tracking-wider text-dark outline-none transition-shadow hover:bg-opacity-90 focus:ring focus:ring-white/75 disabled:pointer-events-none disabled:bg-opacity-25`,
        classes
      )
    "
    v-bind="restAttrs"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { useAttrs } from 'vue'
import { twMerge } from 'tailwind-merge'

defineOptions({
  inheritAttrs: false,
})

const { class: classes, ...restAttrs } = useAttrs()

defineProps({
  disabled: Boolean,
})
</script>
