import { Dispatch } from "react"
import { RoomAction, RoomActionTypes } from "../../types/room"

export const fetchItems = () => {
  return async (dispatch: Dispatch<RoomAction>) => {
    try {
      dispatch({type: RoomActionTypes.FETCH_ITEMS})
      // const response = await запрос на бек todo
      // dispatch({
      //   type: RoomActionTypes.FETCH_ITEMS_SUCCESS,
      //   payload: response.data
      // })
    } catch (error) {
      dispatch({
        type: RoomActionTypes.FETCH_ITEMS_ERROR,
        payload: 'Произошла ошибка при загрузке Items'
      })
    }
  }
}