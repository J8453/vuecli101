<template>
  <div>
    <div
      class="flex flex-col justify-center items-center h-[150px] bg-banner2 bg-center bg-cover bg-no-repeat text-white text-shadow-2xl"
    />
    <div class="bg-neutral-100 flex-col justify-center items-start relative">
      <div class="flex pt-16 py-9 items-center justify-center">
        <div class="ml-28 mr-20">
          <div class="font-extrabold text-2xl w-auto mb-3">縣市快選</div>
          <CitySelector
            :current-region="rootStore.currentRegion"
            :current-city="rootStore.currentCity"
            @region-change="region => rootStore.setCurrentRegion(region)"
            @city-change="city => rootStore.setCurrentCity(city)"
          />
        </div>
      </div>
    </div>

    <div class="py-7 flex flex-col items-center">
      <div class="self-start flex text-xl mx-[80px] my-7">
        <div class="text-green-700 font-bold mr-3">
          {{ rootStore.currentCity.name }}
        </div>
        <div>景點介紹</div>
      </div>
      <div class="w-[1320px]">
        <swiper
          class="swiper px-5 pb-12"
          :slides-per-view="4"
          :space-between="30"
          :slides-per-group="4"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
        >
          <swiper-slide
            v-for="spot in rootStore.spots"
            :key="spot.ScenicSpotID"
          >
            <InfoCard
              :key="spot.ScenicSpotID"
              :cover="spot?.Picture?.PictureUrl1 ?? getPlaceholder()"
              :title="spot.ScenicSpotName"
              :description="spot.DescriptionDetail ?? 'N/A'"
              :open-time="spot.OpenTime ?? 'N/A'"
              :address="spot.Address"
              class="m-3"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="flex flex-col items-center pb-16">
      <div class="self-start flex text-xl mx-[80px] my-12">特色活動</div>
      <div class="w-[1320px]">
        <swiper
          class="swiper px-5"
          :slides-per-view="4"
          :grid="{
            fill: 'row',
            rows: 2,
          }"
          :slides-per-group="4"
          :space-between="30"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
        >
          <swiper-slide
            v-for="activity in rootStore.activities"
            :key="activity.ActivityID"
          >
            <InfoCard
              :cover="activity?.Picture?.PictureUrl1 ?? getPlaceholder()"
              :title="activity.ActivityName"
              :description="activity.Address"
              :location="activity.City"
              class="m-3"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="flex flex-col items-center bg-neutral-100 pb-16">
      <div class="self-start flex text-xl mx-[80px] my-12">餐飲美食</div>
      <div class="w-[1320px]">
        <swiper
          class="swiper px-4 pb-12"
          :slides-per-view="5"
          :grid="{
            fill: 'row',
            rows: 2,
          }"
          :slides-per-group="5"
          :space-between="30"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
        >
          <swiper-slide
            v-for="restaurant in rootStore.restaurants"
            :key="restaurant.RestaurantID"
          >
            <FoodCard
              :cover="restaurant?.Picture?.PictureUrl1 ?? getPlaceholder()"
              :title="restaurant.RestaurantName"
              :description="restaurant.Class"
              :location="restaurant.City"
              class="m-3 !aspect-square"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="flex flex-col items-center pb-16">
      <div class="self-start flex text-xl mx-[80px] my-12">優質住宿</div>
      <div class="w-[1320px]">
        <swiper
          class="swiper px-5 pb-12"
          :slides-per-view="4"
          :grid="{
            fill: 'row',
            rows: 2,
          }"
          :slides-per-group="4"
          :space-between="30"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
        >
          <swiper-slide v-for="hotel in rootStore.hotels" :key="hotel.HotelID">
            <InfoCard
              :cover="hotel.Picture?.PictureUrl1 ?? getPlaceholder()"
              :title="hotel.HotelName"
              :description="hotel.Class"
              :location="hotel.City"
              :price="hotel.Spec"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from '@/stores/root'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import SwiperCore, { Pagination, Navigation, Grid } from 'swiper'
SwiperCore.use([Pagination, Navigation, Grid])
const rootStore = useRootStore()
const getPlaceholder = () =>
  `https://picsum.photos/id/${Math.floor(Math.random() * 150)}/500/300`

const { currentCity } = storeToRefs(rootStore)
watch(currentCity, city => {
  rootStore.fetchDetailPageData(city.value)
})
rootStore.fetchDetailPageData(rootStore.currentCity.value)
</script>
