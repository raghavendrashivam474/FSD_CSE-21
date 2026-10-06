import React from 'react'
import { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  function inc(){
    setCount(count+1);
  }
  function dec(){
    setCount(count-1);
  }
  function res(){
    setCount(0);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3> 
      <button onClick={inc}>+ Add</button>
      <button onClick={dec}>- Sub</button>
      <button onClick={res}>Reset</button>
    </>
  );
};

export default CounterApp;
