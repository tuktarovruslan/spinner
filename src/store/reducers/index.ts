import { combineReducers } from "redux";
import { roomReducer } from "./roomReducer";

export const rootReducer = combineReducers({
  room: roomReducer
})

// создает тип нашего корневого хранилища
export type RootState = ReturnType<typeof rootReducer>