import React, { useState } from 'react'

const Hoc = (OrginialComp) => {
  const NewComp = (props)=>{
      const [count,setCount] = useState(0);

      return <OrginialComp
      {...props}
      counter= {count}
      increment = {()=>{setCount(p=>p+1)}}
      
      />
  }
  return NewComp;
}

export default Hoc