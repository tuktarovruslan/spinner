import { RoomState, RoomActionTypes, RoomAction} from "../../types/room"

const initialState: RoomState = {
  items: [],
  loading: false,
  error: null
}

export const roomReducer = (state = initialState, action: RoomAction): RoomState => {
  switch (action.type) {
    case RoomActionTypes.FETCH_ITEMS:
      return {loading: true, error: null, items: []}
    case RoomActionTypes.FETCH_ITEMS_SUCCESS:
      return {loading: false, error: null, items: []}
    case RoomActionTypes.FETCH_ITEMS_ERROR:
      return {loading: false, error: action.payload, items: []}
    default:
      return state
  }
}