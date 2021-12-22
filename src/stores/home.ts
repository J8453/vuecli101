import { defineStore } from 'pinia'

export enum Region {
  north = 'north',
  middle = 'middle',
  south = 'south',
  east = 'east',
  island = 'island',
}

interface Activity {
  cover: string
  title: string
  description: string
  location: string
}

export const useHome = defineStore('home', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      currentRegion: Region.north,
      activities: [] as Activity[],
    }
  },
  getters: {
    activitiesGroup(state) {
      return [state.activities.slice(0, 3), state.activities.slice(3, 6)]
    },
  },
  actions: {
    async setCurrent(region: Region) {
      this.activities = []
      this.currentRegion = region

      // fetch data here; mock it with setTimeout for now
      console.log(new Date())
      await new Promise(r =>
        setTimeout(() => {
          console.log('resolved', new Date())
          r(undefined)
        }, 500)
      )

      this.activities = [
        {
          cover: 'https://picsum.photos/id/54/500/300',
          title: '2021大溪豆干節',
          description: '花蓮縣壽豐鄉鹽寮村6鄰福德49-2號',
          location: '桃園市',
        },
        {
          cover: 'https://picsum.photos/id/34/300/300',
          title: '2021臺北燈節',
          description: '臺北市政府觀光傳播局',
          location: '臺北市',
        },
        {
          cover: 'https://picsum.photos/id/193/400/300',
          title: '2021桃園國際風箏節',
          description: '桃園市政府觀光旅遊局',
          location: '桃園市',
        },
        {
          cover: 'https://picsum.photos/id/65/300/300',
          title: '2021陽明山花季',
          description: '臺北市政府工務局公園路燈工程管理處',
          location: '臺北市',
        },
        {
          cover: 'https://picsum.photos/id/143/200/300',
          title: '2021桃園花彩節',
          description: '桃園市政府農業局',
          location: '桃園市',
        },
        {
          cover: 'https://picsum.photos/id/31/200/300',
          title: '2021龍岡米干節',
          description: '桃園市政府農業局',
          location: '桃園市',
        },
      ]
    },
  },
})
