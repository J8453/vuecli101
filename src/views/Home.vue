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
      <div class="self-center ml-28 mr-24">
        <div class="font-extrabold text-2xl">縣市快選</div>
        <div>Choose Cities</div>
      </div>
      <div class="flex m-16">
        <RegionCard class="m-5" icon="test" label="北部" />
        <RegionCard class="m-5" icon="test" label="北部" />
        <RegionCard class="m-5" icon="test" label="北部" />
        <RegionCard class="m-5" icon="test" label="北部" />
        <RegionCard class="m-5" icon="test" label="北部" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RegionCard from '@/components/RegionCard.vue'
</script>
