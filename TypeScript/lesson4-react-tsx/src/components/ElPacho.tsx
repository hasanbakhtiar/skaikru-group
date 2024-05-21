import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput =forwardRef((props,ref)=>{
    useImperativeHandle(ref,()=>({
        hi:sayHi
    }))
    
    
    const sayHi = ()=>{
        alert("Hello everyone!")
    }
    return (
        <input type="text" />
    )
})


const ElPacho = () => {
    const inputref = useRef<HTMLInputElement | any>(null);
    const handleClick = ()=>{
        inputref.current!.hi();
    }
    
  return (
    <div>
        <MyInput ref={inputref} /><button onClick={handleClick}>test</button>
    </div>
  )
}

export default ElPacho