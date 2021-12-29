import { defineStore } from 'pinia'
import {
  getActivities,
  getRestaurants,
  getHotels,
  getSpots,
  Activity,
  Restaurant,
  Hotel,
  Spot,
} from '@/services/api/tourism'

export enum Region {
  north = 'north',
  middle = 'middle',
  south = 'south',
  east = 'east',
  island = 'island',
}

const CITIES = {
  [Region.north]: [
    { name: '基隆市', value: 'Keelung' },
    { name: '台北市', value: 'Taipei' },
    { name: '新北市', value: 'NewTaipei' },
    { name: '桃園市', value: 'Taoyuan' },
    { name: '新竹縣', value: 'HsinchuCounty' },
    { name: '新竹市', value: 'Hsinchu' },
    { name: '宜蘭縣', value: 'YilanCounty' },
  ],
  [Region.middle]: [
    { name: '苗栗縣', value: 'MiaoliCounty' },
    { name: '台中市', value: 'Taichung' },
    { name: '彰化縣', value: 'ChanghuaCounty' },
    { name: '雲林縣', value: 'YunlinCounty' },
    { name: '南投縣', value: 'NantouCounty' },
  ],
  [Region.south]: [
    { name: '嘉義縣', value: 'ChiayiCounty' },
    { name: '嘉義市', value: 'Chiayi' },
    { name: '台南市', value: 'Tainan' },
    { name: '高雄市', value: 'Kaohsiung' },
    { name: '屏東縣', value: 'PingtungCounty' },
  ],
  [Region.east]: [
    { name: '台東縣', value: 'TaitungCounty' },
    { name: '花蓮縣', value: 'HualienCounty' },
  ],
  [Region.island]: [
    { name: '澎湖縣', value: 'PenghuCounty' },
    { name: '金門縣', value: 'KinmenCounty' },
    { name: '連江縣', value: 'LienchiangCounty' },
  ],
}

export const useRoot = defineStore('root', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      currentRegion: Region.north,
      cities: CITIES[Region.north],
      currentCity: CITIES[Region.north][1],
      activities: [] as Activity[],
      hotels: [] as Hotel[],
      restaurants: [] as Restaurant[],
      spots: [] as Spot[],
    }
  },
  getters: {
    activitiesGroup(state) {
      return [state.activities.slice(0, 3), state.activities.slice(3, 6)]
    },
  },
  actions: {
    async setCurrentRegion(region: Region) {
      this.activities = []
      this.currentRegion = region
      const cities = CITIES[region]
      const currentCity = cities[0]
      this.cities = cities
      await this.setCurrentCity(currentCity)
    },
    async setCurrentCity(city: { name: string; value: string }) {
      this.currentCity = city
      await this.fetchPageData(city.value)
    },
    async fetchPageData(cityValue: string) {
      console.log(`fetching city data: `, cityValue)

      const [activities, restaurants, hotels] = await Promise.all([
        getActivities({ city: cityValue, $top: 6 }),
        getRestaurants({ city: cityValue, $top: 15 }),
        getHotels({ city: cityValue, $top: 4 }),
      ])
      console.log(activities, restaurants, hotels)

      this.activities = activities ?? []
      this.restaurants = restaurants ?? []
      this.hotels = hotels ?? []
    },
    async fetchDetailPageData(cityValue: string) {
      console.log(`fetching city data: `, cityValue)

      const [activities, restaurants, hotels, spots] = await Promise.all([
        getActivities({ city: cityValue, $top: 32 }),
        getRestaurants({ city: cityValue, $top: 32 }),
        getHotels({ city: cityValue, $top: 32 }),
        getSpots({ city: cityValue, $top: 32 }),
      ])
      console.log(activities, restaurants, hotels, spots)

      this.activities = activities ?? []
      this.restaurants = restaurants ?? []
      this.hotels = hotels ?? []
      this.spots = spots ?? []
    },
  },
})
