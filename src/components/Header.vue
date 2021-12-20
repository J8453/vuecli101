<template>
  <div class="p-7 flex justify-between items-center">
    <img alt="Taiwan GO" src="@/assets/logo.svg" />
    <div class="flex">
      <div v-for="(route, idx) in routes" :key="route.path">
        <router-link :to="route.path" class="font-bold">
          {{ route.label }}
        </router-link>
        <span v-if="idx < routes.length - 1" class="mx-1">|</span>
      </div>
    </div>
    <input
      class="px-3 py-1 text-sm border-2 border-gray-200 bg-gray-100 rounded-2xl"
      placeholder="搜尋關鍵字..."
    />
  </div>
</template>

<script lang="ts" setup>
const routes = [
  {
    path: '/',
    label: 'Home',
  },
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
]
</script>

<style scoped>
a.router-link-exact-active {
  color: #42b983;
}
</style>
