import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Content() {
  let { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };
  return (
    <div className="bg-light p-5">
      <div className="container">
        <div className="row">
          <h1>Content Page {id}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sequi voluptatibus et perspiciatis quod adipisci odio illum autem
            totam deserunt excepturi modi labore nostrum debitis quo impedit
            amet, accusantium expedita!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sequi voluptatibus et perspiciatis quod adipisci odio illum autem
            totam deserunt excepturi modi labore nostrum debitis quo impedit
            amet, accusantium expedita!
          </p>
          <button className="btn btn-outline-dark" onClick={backToHome}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
