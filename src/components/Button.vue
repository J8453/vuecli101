<template>
  <button
    type="button"
    class="bg-green-700 py-1 px-5 rounded-3xl text-sm font-bold"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: null,
  },
})
</script>
