<template>
  <div
    class="w-[290px] min-w-[290px] flex flex-col bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden"
  >
    <img class="h-[243px] object-cover" :src="cover" alt="NO IMAGE" />
    <div class="p-3 w-full bg-white flex flex-col text-left">
      <div class="mt-2 font-bold">{{ title }}</div>
      <div
        class="mt-2 mb-3 text-sm text-neutral-600 max-h-[100px] line-clamp-5"
      >
        {{ description }}
      </div>
      <div class="flex justify-between">
        <div v-if="price" class="text-lg font-bold">
          {{ currencyFormat(price) }}
          <span class="text-sm text-gray-400 font-normal">起</span>
        </div>
        <Tag v-if="tag" :label="tag" />
        <div v-if="location" class="text-blue-600 text-xs flex items-center">
          {{ location }}
        </div>
      </div>
      <div v-if="openTime" class="mb-2 text-sm text-gray-500 line-clamp-3">
        <span class="mr-2">🕰</span>
        {{ openTime }}
      </div>
      <div v-if="address" class="mb-2 text-sm">
        <span class="mr-2">📍</span>
        {{ address }}
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
  tag: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  price: {
    type: String,
    default: null,
  },
  openTime: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    default: null,
  },
})
</script>
