<template>
  <div class="flex items-center gap-2 md:gap-4">
    <div class="w-12 rounded-full bg-white p-1 md:w-28 md:p-2.5">
      <div
        class="h-2 rounded-full bg-dark transition-all md:h-3"
        :style="`width: ${(progress / total) * 100}%`"
      ></div>
    </div>
    <HeartIcon class="size-6 md:size-12" />
  </div>
</template>

<script setup>
import HeartIcon from '@/assets/icons/heart-icon.svg'

defineProps({
  progress: Number,
  total: Number,
})
</script>
