<template>
  <div>
    <div
      class="flex flex-col justify-center items-center h-banner bg-banner bg-center bg-cover bg-no-repeat text-white text-shadow-2xl"
    >
      <div class="text-4xl mt-12 mb-3 font-extrabold">想去哪裡玩？</div>
      <div>這裡共有上千個活動及美食等著你去一同體驗</div>
      <div
        class="my-12 p-1 bg-white border-4 border-gray-300 rounded-3xl w-1/2 flex justify-between"
      >
        <input
          placeholder="e.g. 新北耶誕嘉年華"
          class="flex-1 ml-2 rounded-xl text-gray-800 outline-none"
        />
        <!-- TODO: @click cb -->
        <button type="button" class="bg-green-700 py-1 px-5 rounded-3xl">
          搜尋
        </button>
      </div>
    </div>
    <div
      class="h-banner bg-home-regions bg-no-repeat flex justify-center items-start"
    >
      <div class="flex m-16 items-center">
        <div class="ml-28 mr-20">
          <div class="font-extrabold text-2xl w-auto">縣市快選</div>
          <div class="bg-region">Choose Cities</div>
        </div>
        <!-- NOTE: `isActive` prop name here should be `is-active` -->
        <RegionCard
          v-for="region in regions"
          :key="region.key"
          :icon="region.icon"
          :label="region.label"
          :is-active="region.isActive"
          class="m-5"
        />
      </div>
    </div>
    <div>
      <ActivityCard
        title="大溪豆干節"
        description="花蓮縣壽豐鄉鹽寮村6鄰福德49-2號"
        location="桃園市"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import RegionCard from '@/components/RegionCard.vue'
import ActivityCard from '@/components/ActivityCard.vue'
const regions = reactive([
  {
    key: 'north',
    icon: 'bg-region-north',
    label: '北部',
    isActive: true,
  },
  {
    key: 'middle',
    icon: 'bg-region-middle',
    // TODO: why this can't work?
    // icon: 'bg-[url("./regions/north.svg")]',
    label: '中部',
    isActive: false,
  },
  {
    key: 'south',
    icon: 'bg-region-south',
    label: '南部',
    isActive: false,
  },
  {
    key: 'east',
    icon: 'bg-region-east',
    label: '東部',
    isActive: false,
  },
  {
    key: 'island',
    icon: 'bg-region-island',
    label: '離島',
    isActive: false,
  },
])
</script>
