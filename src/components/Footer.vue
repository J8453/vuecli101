<template>
  <div class="text-neutral-400">
    <div class="py-12 flex flex-col items-center bg-neutral-700">
      <router-link to="/">
        <img alt="Taiwan GO" src="@/assets/logo-light.svg" class="my-4" />
      </router-link>

      <div class="flex my-4">
        <router-link
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          class="mx-3 text-sm"
        >
          {{ route.label }}
        </router-link>
      </div>
    </div>
    <div class="container-full py-2 bg-neutral-800 text-xs">
      台灣旅遊景點導覽
    </div>
  </div>
</template>

<script lang="ts" setup>
const routes = [
  {
    path: '/activities',
    label: '特色活動',
  },
  {
    path: '/food',
    label: '美食饗宴',
  },
  {
    path: '/accommodations',
    label: '精選住宿',
  },
  {
    path: '/todos',
    label: 'TODOs',
  },
  {
    path: '/vue',
    label: 'Vue',
  },
]
</script>

<style scoped>
a.router-link-exact-active {
  color: #ffffff;
}
</style>
