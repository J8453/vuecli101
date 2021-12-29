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

export const useDetails = defineStore('details', {
  state: () => {
    return {
      spots: [] as Spot[],
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
