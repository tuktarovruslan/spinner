// хук-обертка, упрощающий вызов экшенов

import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as RoomActionCreators from "../store/action-creators/room"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(RoomActionCreators, dispatch)
}