<template>
  <div
    class="w-28 pt-5 pb-2 flex flex-col items-center bg-white rounded-lg shadow-lg cursor-pointer"
  >
    <div
      class="w-20 h-20 flex-shrink-0 rounded-full bg-green-700 bg-no-repeat bg-center"
    />
    <div class="mt-2 font-bold">{{ title }}</div>
    <Tag label="年度" />
  </div>
  <div class="relative">
    <!-- <div class="aspect-w-4 aspect-h-3 w-1/3 bg-gray-300">HELLO</div> -->
    <div class="w-[300px] aspect-[4/3] bg-gray-300">HELLO</div>
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
})
</script>
