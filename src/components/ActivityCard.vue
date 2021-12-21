<template>
  <div
    class="w-full flex flex-col items-center bg-white rounded-xl shadow-lg cursor-pointer"
  >
    <div class="w-[400px] h-[243px] bg-gray-200">HELLO</div>
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
    <!-- <div
      class="w-20 h-20 flex-shrink-0 rounded-full bg-green-700 bg-no-repeat bg-center"
    /> -->
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
