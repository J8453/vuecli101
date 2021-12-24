import { defineStore } from 'pinia'
import {
  Activity,
  getActivities,
  getHotels,
  getRestaurants,
  Hotel,
  Restaurant,
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

export const useHome = defineStore('home', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      currentRegion: Region.north,
      cities: CITIES[Region.north],
      currentCity: CITIES[Region.north][1].value,
      activities: [] as Activity[],
      hotels: [] as Hotel[],
      restaurants: [] as Restaurant[],
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
      const currentCity = cities[0].value
      this.cities = cities
      await this.setCurrentCity(currentCity)
    },
    async setCurrentCity(city: string) {
      this.currentCity = city
      await this.fetchPageData(city)
    },
    async fetchPageData(city: string) {
      // console.log(`fetching city data: `, city)

      const [activities, restaurants, hotels] = await Promise.all([
        getActivities({ city, $top: 6 }),
        getRestaurants({ city, $top: 15 }),
        getHotels({ city, $top: 4 }),
      ])
      // console.log(activities, restaurants, hotels)

      this.activities = activities ?? []
      this.restaurants = restaurants ?? []
      this.hotels = hotels ?? []
    },
  },
})
