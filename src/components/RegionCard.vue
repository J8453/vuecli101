<template>
  <div
    class="w-28 py-5 flex flex-col items-center bg-white rounded-lg shadow-lg"
  >
    <div
      class="w-20 h-20 flex-shrink-0 rounded-full bg-green-700"
      :class="icon"
    />
    <div class="mt-2 font-bold">{{ label }}</div>
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
})
</script>
