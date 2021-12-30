<template>
  <div>
    <div class="flex">
      <!-- NOTE: `is-active` attr is converting to `isActive` prop in RegionCard  -->
      <RegionCard
        v-for="region in regions"
        :key="region.key"
        class="m-5"
        :icon="region.icon"
        :label="region.label"
        :is-active="currentRegion === region.key"
        @click="$emit('regionChange', region.key)"
      />
    </div>
    <div class="pt-9 pb-16">
      <span
        v-for="city in store.cities"
        :key="city.value"
        class="text-sm rounded-2xl px-3 py-2 mx-2 hover:bg-white cursor-pointer"
        @click="$emit('cityChange', city)"
      >
        <span
          class="border-b-2 border-solid pb-1"
          :class="
            currentCity.value === city.value
              ? 'border-green-700'
              : 'border-transparent'
          "
        >
          {{ city.name }}
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { useRoot, Region } from '@/stores/root'
import RegionCard from './RegionCard.vue'
const store = useRoot()
const regions = [
  {
    key: Region.north,
    icon: 'bg-region-north',
    label: '北部',
  },
  {
    key: Region.middle,
    icon: 'bg-region-middle',
    label: '中部',
  },
  {
    key: Region.south,
    icon: 'bg-region-south',
    label: '南部',
  },
  {
    key: Region.east,
    icon: 'bg-region-east',
    label: '東部',
  },
  {
    key: Region.island,
    icon: 'bg-region-island',
    label: '離島',
  },
]
defineProps({
  currentRegion: {
    type: String as PropType<Region>,
    required: true,
  },
  currentCity: {
    type: Object as PropType<{ name: string; value: string }>,
    required: true,
  },
})
defineEmits<{
  (event: 'regionChange', region: Region): void
  (event: 'cityChange', city: { name: string; value: string }): void
}>()
</script>
