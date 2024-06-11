import React, { useRef } from 'react'
import supabase from '../config/connect'
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { addData } from '../tools/action/textAction';

const Add = () => {
    const textRef  = useRef();
    const dispatch = useDispatch();
    const textSubmit = async(e)=>{
        e.preventDefault();
        const dataText = textRef.current.value;
        dispatch(addData(dataText));
    }

  return (
    <form onSubmit={textSubmit}>
        <input type="text" ref={textRef} />
        <button type='submit'>add</button>
    </form>
  )
}

export default Add