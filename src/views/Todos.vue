<template>
  <div class="container flex flex-col items-center">
    <div class="flex flex-col">
      <TodoItem
        v-for="todo in todos.items"
        :key="todo.uuid"
        :todo="todo"
        class="mb-3 basis-full"
      />
    </div>
    <div class="flex">
      <input
        v-model="inputValue"
        type="text"
        class="w-96 border rounded-md border-gray-500 mx-1 px-3 py-2"
      />
      <button
        class="w-36 border rounded-md border-gray-500 mx-1 px-3 py-2"
        @click="handleClickAdd()"
      >
        ADD TODO
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTodos } from '@/stores/todos'
import TodoItem from '@/components/TodoItem.vue'
const todos = useTodos()
const inputValue = ref('')
const handleClickAdd = () => {
  todos.addTodo(inputValue.value)
  inputValue.value = ''
}
</script>
