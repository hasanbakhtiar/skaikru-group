
import React, { useState } from 'react'
import Hoc from './Hoc';

const CounterOne = (props) => {
    const {counter,increment,title} = props;
  return (
    <div>
        {title}
        {counter}
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Hoc(CounterOne);