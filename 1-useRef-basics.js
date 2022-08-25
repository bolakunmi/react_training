import React, { useEffect, useRef } from "react";
import { useState } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);



  function handleSubmit(e) {
    e.preventDefault();
    console.log(refContainer)
    console.log(refContainer.current.value);

  }

  return (
    <React.Fragment>
      <h2>useRef</h2>;
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
          <button type="submit">button</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UseRefBasics; 