import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './styles/checkbox.scss'

const Checkbox: React.FC = () => {

  return (
    <div className="chkbx">
      <input className="inputchkbx" type="checkbox"></input>
      <label className="labelchkbx"></label>
      <div className="hello">
        Hello
      </div>
    </div>
  );
};

export default Checkbox;