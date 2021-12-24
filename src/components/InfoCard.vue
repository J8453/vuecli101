<template>
  <div
    class="w-[290px] min-w-[290px] flex flex-col bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
  >
    <img class="h-[243px] object-cover" :src="cover" alt="NO IMAGE" />
    <div class="p-3 w-full bg-white flex flex-col">
      <div class="mt-2 font-bold text-left">{{ title }}</div>
      <div class="mt-2 mb-3 text-sm text-left">{{ description }}</div>
      <div class="flex justify-between">
        <div v-if="price" class="text-lg font-bold">
          {{ currencyFormat(price) }}
          <span class="text-sm text-gray-400 font-normal">起</span>
        </div>
        <Tag v-else label="年度" />
        <div v-if="location" class="text-blue-600 text-xs flex items-center">
          {{ location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { currencyFormat } from '@/utils/currency'
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
  price: {
    type: String,
    default: null,
  },
})
</script>
