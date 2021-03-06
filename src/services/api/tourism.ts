import $http from '.'

interface InfoBase {
  ID: string
  Name?: string
  Description?: string
  Location?: string
  Address?: string
  Picture?: {
    PictureUrl1?: string
    PictureDescription1?: string
  }
  City?: string
}

export interface Activity extends InfoBase {
  ActivityID: string
  ActivityName: string
}
export interface Restaurant extends InfoBase {
  RestaurantID: string
  RestaurantName: string
  Class?: string
}
export interface Hotel extends InfoBase {
  HotelID: string
  HotelName: string
  Class?: string
  Spec?: string
}
export interface Spot extends InfoBase {
  ScenicSpotID: string
  ScenicSpotName: string
  OpenTime?: string
  DescriptionDetail?: string
}

/**
 * Get activities
 */
export const getActivities = async ({
  city,
  ...data
}: {
  city: string
  $top: number
}): Promise<Activity[] | undefined> => {
  const params = {
    $format: 'JSON',
  }
  try {
    return await $http.get(`/Activity/${city}`, {
      params: { ...params, ...data },
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * Get restaurants
 */
export const getRestaurants = async ({
  city,
  ...data
}: {
  city: string
  $top: number
}): Promise<Restaurant[] | undefined> => {
  const params = {
    $format: 'JSON',
  }
  try {
    return await $http.get(`/Restaurant/${city}`, {
      params: { ...params, ...data },
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * Get hotels
 */
export const getHotels = async ({
  city,
  ...data
}: {
  city: string
  $top: number
}): Promise<Hotel[] | undefined> => {
  const params = {
    $format: 'JSON',
  }
  try {
    return await $http.get(`/Hotel/${city}`, {
      params: { ...params, ...data },
    })
  } catch (error) {
    console.error(error)
  }
}

/**
 * Get spots
 */
export const getSpots = async ({
  city,
  ...data
}: {
  city: string
  $top: number
}): Promise<Spot[] | undefined> => {
  const params = {
    $format: 'JSON',
  }
  try {
    return await $http.get(`/ScenicSpot/${city}`, {
      params: { ...params, ...data },
    })
  } catch (error) {
    console.error(error)
  }
}
