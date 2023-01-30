import React, { useEffect, useState } from "react";

export default function Login(props) {
  //   let { onGetInputData } = props;

  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: null,
    password: null,
  });

  useEffect(() => {
    // onGetInputData(formValue.username);
  }, [formValue.username]);

  const getFormValues = (e) => {
    if (e.target.value.length <= 3) {
      setErrors({
        ...errors,
        username: "username must be grater than 3",
      });
    } else {
      setErrors({
        ...errors,
        username: null,
      });
      setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="bg-dark p-5 text-light">
      <h2 className="text-center mb-3">Login</h2>
      <div className="container">
        <div className="row">
          <input
            type="text"
            name="username"
            placeholder="Enter Your Name"
            className={`form-control ${errors.username ? "red" : "green"}`}
            onChange={getFormValues}
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
          <input
            type="text"
            name="password"
            placeholder="Enter Your password"
            className="form-control mt-2"
            onChange={getFormValues}
          />
        </div>
      </div>
    </div>
  );
}
