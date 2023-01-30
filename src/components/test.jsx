import React, { useState } from "react";

export function Test() {
  let [state, setState] = useState({
    title: "Component APP",
    count: 0,
    show: false,
  });

  const increase = () => {
    setState({
      ...state,
      count: state.count + 1,
    });
  };
  const decrease = () => {
    setState({
      ...state,
      count: state.count - 1,
    });
  };
  const changeTitle = () => {
    setState({
      ...state,
      title: "new Title",
    });
  };
  const toggle = () => {
    setState({
      ...state,
      show: !state.show,
    });
  };
  return (
    <div className="alert alert-success text-center">
      {state.show && <h2>{state.title}</h2>}

      <p>
        Count is <strong>{state.count}</strong>
      </p>
      <button onClick={increase} className="btn btn-success mx-4">
        +
      </button>
      <button onClick={decrease} className="btn btn-danger">
        -
      </button>
      <button onClick={changeTitle} className="btn btn-dark mx-5">
        Change Title
      </button>
      <button onClick={toggle} className="btn btn-warning mx-1">
        Toggle
      </button>
    </div>
  );
}
