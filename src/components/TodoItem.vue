<template>
  <div class="flex flex-row items-center">
    <input
      v-if="todo.isEditing"
      :value="todo.content"
      class="w-72"
      @input="handleInputChange"
    />
    <div v-else class="w-72 text-left">
      {{ todo.content }}
    </div>
    <div class="w-48 flex">
      <button
        class="flex-1 font-bold bg-yellow-500 border rounded-md border-gray-500 mx-1 px-3 py-2"
        @click="todos.removeTodo(todo.uuid)"
      >
        DELETE
      </button>
      <button
        class="flex-1 border rounded-md border-gray-500 mx-1 px-3 py-2"
        @click="handleClickEdit(todo)"
      >
        {{ todo.isEditing ? 'SAVE' : 'EDIT' }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { PropType } from '@vue/runtime-core'
import { TodoItem as Todo } from '@/stores/todos'
import { useTodos } from '@/stores/todos'
const todos = useTodos()
const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
})
const handleInputChange = (e: Event) => {
  const uuid = props.todo.uuid
  const target = e.target as HTMLInputElement
  todos.updateTodo(target.value, uuid)
}
const handleClickEdit = (todo: Todo) => {
  todo.isEditing = !todo.isEditing
}
</script>
