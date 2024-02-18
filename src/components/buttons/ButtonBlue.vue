<template>
  <button
    :class="
      twMerge(
        `text-2xl rounded-3xl bg-blue px-12 py-2 uppercase tracking-wider text-white shadow-blue-button outline-none transition-shadow hover:bg-blue-light focus:ring focus:ring-white/75`,
        classes
      )
    "
    v-bind="restAttrs"
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
</script>
