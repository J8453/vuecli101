<template>
  <div>
    <div
      class="flex flex-col justify-center items-center h-[500px] bg-banner bg-center bg-cover bg-no-repeat text-white text-shadow-2xl"
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
      class="h-[470px] bg-[url(./home-regions.png)] bg-no-repeat flex justify-center items-start relative"
    >
      <img src="@/assets/home-deco1.png" class="absolute left-0 top-[180px]" />
      <div class="flex m-16 items-center">
        <div class="ml-28 mr-20 text-left">
          <div class="font-extrabold text-2xl w-auto">縣市快選</div>
          <div>Choose Cities</div>
        </div>
        <!-- NOTE: `isActive` prop name here should be `is-active` -->
        <RegionCard
          v-for="region in regions"
          class="m-5"
          :key="region.key"
          :icon="region.icon"
          :label="region.label"
          :is-active="store.currentRegion === region.key"
          @click="store.setCurrent(region.key)"
        />
      </div>
    </div>
    <div class="relative">
      <img
        src="@/assets/home-deco2.png"
        class="absolute right-0 bottom-[-270px]"
      />
      <div v-if="store.activities.length === 0">Loading</div>
      <div v-else class="relative">
        <div class="flex justify-center items-center">
          <ActivityCard
            v-for="activity in store.activitiesGroup[0]"
            :key="activity.title"
            :cover="activity.cover"
            :title="activity.title"
            :description="activity.description"
            :location="activity.location"
            class="m-3"
          />
          <div class="ml-7 text-left">
            <div class="font-extrabold text-2xl w-auto">多久沒有</div>
            <div class="font-extrabold text-2xl w-auto">出門走走了呢？</div>
            <div>Let's get out</div>
          </div>
        </div>
        <div class="flex justify-center">
          <ActivityCard
            v-for="activity in store.activitiesGroup[1]"
            :key="activity.title"
            :cover="activity.cover"
            :title="activity.title"
            :description="activity.description"
            :location="activity.location"
            class="m-3"
          />
        </div>
      </div>
    </div>
    <div class="h-[500px] bg-[url(./home-restaurants.png)] bg-no-repeat">
      <div class="flex m-16 items-center pt-[64px]">
        <div class="ml-28 mr-20 text-left">
          <div class="font-extrabold text-2xl w-auto">餐廳美食</div>
          <div>Tasty</div>
        </div>
        <!-- NOTE: `isActive` prop name here should be `is-active` -->
        <FoodCard
          v-for="a in store.activitiesGroup[1]"
          :key="a.title"
          :cover="a.cover"
          :title="a.title"
          :description="a.description"
          :location="a.location"
          class="m-5"
        />
      </div>
    </div>
    <div class="py-14">
      <div class="ml-7">
        <div class="font-extrabold text-2xl w-auto">精選住宿</div>
        <div>Accommodation</div>
      </div>
      <div class="flex justify-center my-7">
        <ActivityCard
          v-for="activity in store.activitiesGroup[1]"
          :key="activity.title"
          :cover="activity.cover"
          :title="activity.title"
          :description="activity.description"
          :location="activity.location"
          class="m-3"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import RegionCard from '@/components/RegionCard.vue'
import ActivityCard from '@/components/ActivityCard.vue'
import FoodCard from '@/components/FoodCard.vue'
import { useHome, Region } from '@/stores/home'
const store = useHome()
const regions = reactive([
  {
    key: Region.north,
    icon: 'bg-region-north',
    label: '北部',
  },
  {
    key: Region.middle,
    icon: 'bg-region-middle',
    // TODO: why this can't work?
    // icon: 'bg-[url("./regions/north.svg")]',
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
])
// store.$subscribe((mutation, state) => {
//   console.log(mutation, state.currentRegion)
// })
// watch(
//   store.$state,
//   state => {
//     console.log(state)
//   },
//   { deep: true }
// )
</script>
