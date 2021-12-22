<template>
  <div
    class="w-[290px] flex flex-col bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
  >
    <!-- <div class="h-[243px] bg-gray-200">
      <img src="https://www.fillmurray.com/640/360" />
    </div> -->
    <!-- <img
      :src="require('@/assets/regions/north.svg')"
      class="h-[243px] bg-gray-300"
    /> -->
    <img
      class="h-[243px] object-cover"
      src="http://placeimg.com/640/480/arch"
    />
    <div class="p-3 w-full bg-white flex flex-col">
      <div class="mt-2 font-bold text-left">{{ title }}</div>
      <div class="mt-2 mb-4 text-sm text-left">{{ description }}</div>
      <div class="flex justify-between">
        <Tag label="年度" />
        <div v-if="location" class="text-blue-600 text-xs flex items-center">
          {{ location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tag from '@/components/Tag.vue'
defineProps({
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
