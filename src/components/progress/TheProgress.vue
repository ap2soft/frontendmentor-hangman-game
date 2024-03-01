<template>
  <div class="flex items-center gap-2">
    <div class="w-12 rounded-full bg-white p-1">
      <div
        class="h-2 rounded-full bg-dark transition-all"
        :style="`width: ${(progress / total) * 100}%`"
      ></div>
    </div>
    <HeartIcon class="size-6" />
  </div>
</template>

<script setup>
import HeartIcon from '@/assets/icons/heart-icon.svg'

defineProps({
  progress: Number,
  total: Number,
})
</script>
