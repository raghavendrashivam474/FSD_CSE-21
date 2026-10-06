import React, { useState } from 'react';

export const Image_row_col = () => {
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  const STEP = 20;
  const MIN_SIZE = 40;

  function handleIncRow() {
    setHeight((prev) => prev + STEP);
  }

  function handleDecRow() {
    setHeight((prev) => Math.max(MIN_SIZE, prev - STEP));
  }

  function handleIncCol() {
    setWidth((prev) => prev + STEP);
  }

  function handleDecCol() {
    setWidth((prev) => Math.max(MIN_SIZE, prev - STEP));
  }

  function handleReset() {
    setWidth(200);
    setHeight(200);
  }

  return (
    <div>
      <h2>Image Row & Column Resizer</h2>
      
      <div>
        <button onClick={handleIncRow}>Row + (Height ↑)</button>
        <button onClick={handleDecRow}>Row - (Height ↓)</button>
        <button onClick={handleIncCol}>Col + (Width ↑)</button>
        <button onClick={handleDecCol}>Col - (Width ↓)</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div style={{marginTop: "20px"}}>
        <img
          src="https://picsum.photos/600/600"
          alt="Resizable demo"
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
      </div>
    </div>
  );
};
