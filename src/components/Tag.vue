<template>
  <span class="bg-gray-300 rounded-md px-2 py-1">{{ label }}</span>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
