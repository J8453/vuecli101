<template>
  <div
    class="w-28 pt-5 pb-2 flex flex-col items-center bg-white rounded-lg shadow-lg cursor-pointer"
  >
    <div
      class="w-20 h-20 flex-shrink-0 rounded-full bg-green-700 bg-no-repeat bg-center"
      :class="icon"
    />
    <div class="mt-2 font-bold">{{ label }}</div>
    <div
      class="mt-1 w-2 h-2 flex-shrink-0 rounded-full"
      :class="isActive ? 'bg-gray-300' : 'bg-white'"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
})
</script>
