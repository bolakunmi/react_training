import React, { useEffect, useRef } from "react";
import { useState } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const [typed, setTyped] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(refContainer);
    console.log(refContainer.current.value);
  }

  function handlechange(e) {
    setTyped(() => {
      return e.target.value;
      // automatically sets in new value in real time
    });
  }
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
    // to automatically focus on an input, needs to be under useeffect to work
  },[]);

  return (
    <React.Fragment>
      <h2>useRef</h2>;
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            ref={refContainer}
            onChange={(e) => {
              handlechange(e);
              // performs this function on any change
            }}
            value={typed}
            // stores the value to the setstate
          />
          <button type="submit">button</button>
        </div>
      </form>
      <h1>{typed}</h1>
    </React.Fragment>
  );
};

export default UseRefBasics;
