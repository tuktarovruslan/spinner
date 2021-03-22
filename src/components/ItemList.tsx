import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Checkbox from './Checkbox';
import './styles/item-list.scss'

const ItemList: React.FC = () => { // указываем тип: функциональный компонент
  const {items, loading, error} = useTypedSelector(state => state.room)
  const {fetchItems} = useActions()

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div>
      <Checkbox></Checkbox>
    </div>
  );
};

export default ItemList;