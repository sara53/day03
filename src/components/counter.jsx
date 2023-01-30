import React, { useEffect, useState } from "react";

export function Counter() {
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("Counter App");
  let [show, setShow] = useState(false);

  // ======================

  /** DidMount,Didupdate
   *  [] --> componentDidMount
   * [statename] , componentDidMount, componentDidupdate if statename changed
   * [statename1,satename2] componentDidMount, componentDidupdate if statename1 changed,if statename2 changed
   *
   */

  useEffect(() => {
    console.log(count);
    return () => {
      console.log("Clean up function");
    };
  }, [count]);
  // ======================

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const changeTitle = () => {
    setTitle("new Title");
  };
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="alert alert-success text-center">
      <h2>{title}</h2>
      {console.log("1-Render")}
      <p>
        Count is <strong>{count}</strong>
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
