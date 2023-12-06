"use client";
import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h2>Count: {counter}</h2>

            <button onClick={()=>setCounter(counter+1)} className='btn btn-primary'>+</button>
            <button onClick={()=>setCounter(counter-1)} className='btn btn-primary'>-</button>
        </div>
    );
};

export default Counter;