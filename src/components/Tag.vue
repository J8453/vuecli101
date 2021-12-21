<template>
  <span class="bg-gray-200 rounded-2xl px-2 py-1 text-xs">{{ label }}</span>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
