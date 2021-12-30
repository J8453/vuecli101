<template>
  <div>
    <div
      class="flex flex-col justify-center items-center h-[500px] bg-banner1 bg-center bg-cover bg-no-repeat text-white text-shadow-2xl"
    >
      <div class="text-4xl mt-12 mb-3 font-extrabold">想去哪裡玩？</div>
      <div>這裡共有上千個活動及美食等著你去一同體驗</div>
      <!-- <div
        class="my-12 p-1 bg-white border-4 border-gray-300 rounded-3xl w-1/2 flex justify-between"
      >
        <input
          placeholder="e.g. 新北耶誕嘉年華"
          class="flex-1 ml-2 rounded-xl text-gray-800 outline-none"
        />
        <Button label="搜尋" />
      </div> -->
    </div>
    <div
      class="bg-[url(./home-regions.png)] bg-no-repeat flex-col justify-center items-start relative"
    >
      <img
        src="@/assets/home-deco1.png"
        class="absolute left-0 top-[180px] z-0"
      />
      <div class="flex pt-16 py-9 items-center justify-center">
        <div class="ml-28 mr-20 text-left">
          <div class="font-extrabold text-2xl w-auto">縣市快選</div>
          <div>Choose Cities</div>
        </div>
        <CitySelector
          :current-region="store.currentRegion"
          :current-city="store.currentCity"
          @region-change="region => store.setCurrentRegion(region)"
          @city-change="city => store.setCurrentCity(city)"
        />
      </div>
    </div>
    <div class="relative">
      <img
        src="@/assets/home-deco2.png"
        class="absolute right-0 bottom-[-270px] -z-10"
      />
      <div v-if="store.activities.length === 0">Loading</div>
      <div v-else class="relative">
        <div class="flex justify-center items-center">
          <InfoCard
            v-for="activity in store.activitiesGroup[0]"
            :key="activity.ID"
            :cover="activity?.Picture?.PictureUrl1 ?? getPlaceholder()"
            :title="activity.ActivityName"
            :description="activity.Address"
            tag="年度"
            :location="activity.City"
            class="m-3"
          />
          <div class="ml-7 text-left">
            <div class="font-extrabold text-2xl w-auto">多久沒有</div>
            <div class="font-extrabold text-2xl w-auto">出門走走了呢？</div>
            <div>Let's get out</div>
            <Button
              class="text-white mt-3 py-3 px-5"
              @click="router.push('/more')"
            >
              更多 Funny
            </Button>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <InfoCard
            v-for="activity in store.activitiesGroup[1]"
            :key="activity.ID"
            :cover="activity?.Picture?.PictureUrl1 ?? getPlaceholder()"
            :title="activity.ActivityName"
            :description="activity.Address"
            tag="年度"
            :location="activity.City"
            class="m-3"
          />
        </div>
      </div>
    </div>
    <div class="h-[500px] bg-[url(./home-restaurants.png)] bg-no-repeat">
      <div class="flex m-16 items-center pt-[64px]">
        <div class="flex-shrink-0 ml-28 mr-20 text-left">
          <div class="font-extrabold text-2xl w-auto">餐廳美食</div>
          <div>Tasty</div>
          <Button
            class="text-white mt-3 py-3 px-5"
            @click="router.push('/more')"
          >
            更多美味
          </Button>
        </div>
        <div class="flex overflow-x-scroll">
          <FoodCard
            v-for="restaurant in store.restaurants"
            :key="restaurant.ID"
            :cover="restaurant.Picture?.PictureUrl1 ?? getPlaceholder()"
            :title="restaurant.RestaurantName"
            :description="restaurant.Class"
            :location="restaurant.City"
            class="m-5"
          />
        </div>
      </div>
    </div>
    <div
      class="py-20 bg-[url(./home-accommodations.png)] bg-no-repeat bg-bottom bg-[length:100%_auto]"
    >
      <div class="ml-7">
        <div class="font-extrabold text-2xl w-auto">精選住宿</div>
        <div>Accommodation</div>
      </div>
      <div class="flex justify-center my-7 relative">
        <InfoCard
          v-for="(hotel, idx) in store.hotels"
          :key="hotel.ID"
          :cover="hotel.Picture?.PictureUrl1 ?? getPlaceholder()"
          :title="hotel.HotelName"
          :description="hotel.Class"
          :location="hotel.City"
          :price="hotel.Spec"
          class="m-5 relative"
          :class="idx % 2 === 0 ? 'top-5' : ''"
        />
      </div>
      <Button class="text-white mt-3 py-3 px-5" @click="router.push('/more')">
        更多住宿
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import CitySelector from '@/components/CitySelector.vue'
import InfoCard from '@/components/InfoCard.vue'
import FoodCard from '@/components/FoodCard.vue'
import { toRefs, watch } from 'vue'
import { useRoot } from '@/stores/root'
import { useRouter } from 'vue-router'
const store = useRoot()
const router = useRouter()
const getPlaceholder = () =>
  `https://picsum.photos/id/${Math.floor(Math.random() * 150)}/500/300`

const { currentCity } = toRefs(store)
watch(currentCity, city => {
  store.fetchPageData(city.value)
})
store.fetchPageData(store.currentCity.value)
</script>
