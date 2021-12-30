<template>
  <div
    class="w-[231px] min-w-[231px] aspect-[3/5] flex rounded-xl cursor-pointer bg-cover bg-center z-1"
    :style="{
      backgroundImage: `url(${cover}), linear-gradient(360deg, #00000095 0%, rgba(0, 0, 0, 0) 100%)`,
      backgroundBlendMode: 'overlay',
    }"
  >
    <div class="p-3 w-full self-end flex justify-between items-end text-white">
      <div class="flex flex-col">
        <div class="font-bold text-left">{{ title }}</div>
        <div class="text-sm text-left">{{ description }}</div>
      </div>
      <Tag
        v-if="location"
        :label="location"
        class="!bg-neutral-900 flex-shrink-0"
      />
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
    default: 'N/A',
  },
  description: {
    type: String,
    default: 'N/A',
  },
  location: {
    type: String,
    default: null,
  },
})
</script>
