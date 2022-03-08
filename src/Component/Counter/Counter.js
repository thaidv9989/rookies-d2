import './Counter.css'
import React from "react";
import {useState}  from 'react'
import {useEffect} from 'react'
const Counter = () =>{
    const [value, setValues] = useState(0)
    useEffect( () => {
        document.title = `Counter value: ${ value }`
    })
    const handleMinus = () =>{
        setValues(value - 1)
    }
    const handlePlus = () =>{
        setValues(value + 1)
    }
    return (
        <div>
            <button onClick={handleMinus} className="counter__btn">-</button>
            <span className="counter__values">{value}</span>
            <button onClick={handlePlus} className="counter__btn">+</button>
        </div>
        
    )
}
export default Counter;