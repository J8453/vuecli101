<template>
  <div
    class="w-[231px] h-[335px] flex rounded-xl cursor-pointer bg-cover bg-center z-1"
    :style="{ backgroundImage: `url(${cover})` }"
  >
    <div class="p-3 w-full self-end flex justify-between items-end text-white">
      <div class="flex flex-col">
        <div class="mt-2 font-bold text-left">{{ title }}</div>
        <div class="mt-2 text-sm text-left">{{ description }}</div>
      </div>
      <Tag :label="location" class="bg-black flex-shrink-0" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tag from '@/components/Tag.vue'
defineProps({
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: null,
  },
})
</script>
