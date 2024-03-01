<template>
  <button
    :class="
      twMerge(
        `rounded-3xl bg-blue px-12 py-2 text-2xl uppercase tracking-wider text-white shadow-blue-button outline-none transition-shadow hover:bg-blue-light focus:ring focus:ring-white/75`,
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
