import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { decrement, increment, reset } from './Toolkit'


const Counter = () => {
    const Result =useSelector((state)=>{
  return state.counter.count
    })
    const dispatch=useDispatch()
    
    const inc =()=>{
   dispatch(increment())
    }

    const dec =()=>{
       dispatch(decrement()) 
    }

    const Reset =()=>{
       dispatch(reset()) 
    }
  return (
    <>
    <h1>{Result}</h1>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
        <button onClick={Reset}>Reset</button>
    </>
  )
}

export default Counter