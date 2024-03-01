<template>
  <button
    :class="
      twMerge(
        `rounded-full bg-pink-gradient p-3 uppercase tracking-wider text-white shadow-header-button outline-none transition hover:bg-pink-light-gradient focus:ring focus:ring-white/75`,
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
