import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export interface TodoItem {
  uuid: string
  isEditing: boolean
  isCompleted: boolean
  content: string
}

export const useTodos = defineStore('todos', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      items: [] as TodoItem[],
    }
  },
  actions: {
    addTodo(content: string) {
      this.items.push({
        uuid: uuidv4(),
        isEditing: false,
        isCompleted: false,
        content,
      })
    },
    removeTodo(uuid: string) {
      this.items = this.items.filter(item => item.uuid !== uuid)
    },
    updateTodo(str: string, uuid: string) {
      const item = this.items.find(item => item.uuid === uuid)
      if (item) item.content = str
      // console.log(item)
    },
  },
})
