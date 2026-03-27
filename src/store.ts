import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoList'
import formReducer from './features/formSlice'
import { loadFromLocalStorage, saveToLocalStorage } from "./healpers/storage";
type PreloadedState = {
  todoList: ReturnType<typeof todoReducer>
}

const preloadedState: PreloadedState | undefined = loadFromLocalStorage()
export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    form: formReducer,
  },
  preloadedState,
})

store.subscribe(()=> saveToLocalStorage(store.getState()))
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch