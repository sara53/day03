import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export function About() {
  return (
    <div className="bg-dark text-light p-5">
      <div className="container">
        <h1>About Page</h1>
        <div className="row">
          <div className="col-6 alert-alert-info">
            <h1>Front End Track</h1>
          </div>
          <div className="col-6 alert-alert-info">
            <h1>Welcome From ITI</h1>
          </div>
        </div>
        <div className="row bg-light text-dark p-4 rounded">
          <div className="col-6">
            <h1>
              <NavLink className="nav-link" to="lib">
                Lib
              </NavLink>
            </h1>
            <h1>
              <NavLink className="nav-link" to="company">
                Company
              </NavLink>
            </h1>
          </div>
          <div className="col-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
