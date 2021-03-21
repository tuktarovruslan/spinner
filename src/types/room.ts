export interface RoomState { // содержит все типы атрибутов состояния
  items: any[];
  loading: boolean;
  error: null | string;
}

export enum RoomActionTypes { // содержит все типы экшенов
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR',
}

interface FetchItemsAction {
  type: RoomActionTypes.FETCH_ITEMS; // получение типа из перечисления
}

interface FetchItemsSuccessAction {
  type: RoomActionTypes.FETCH_ITEMS_SUCCESS;
  payload: any[]
}

interface FetchItemsErrorAction {
  type: RoomActionTypes.FETCH_ITEMS_ERROR;
  payload: string;
}

export type RoomAction = FetchItemsAction // обобщает интерфейсы для экшена
  | FetchItemsErrorAction
  | FetchItemsSuccessAction