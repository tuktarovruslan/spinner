import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "../store/reducers"

// создает типизированный хук на основе типа нашего корневого хранилища
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector