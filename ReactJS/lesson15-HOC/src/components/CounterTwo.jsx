
import React, { useState } from 'react'
import Hoc from './Hoc';

const CounterTwo = (props) => {
    const {counter,increment,title} = props;
  return (
    <div>
        <h1>{title}</h1>
        {counter}
        <button style={{backgroundColor:"red"}} onClick={increment}>+</button>
    </div>
  )
}

export default Hoc(CounterTwo);