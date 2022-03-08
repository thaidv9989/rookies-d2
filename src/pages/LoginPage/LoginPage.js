import React, { useState } from "react";
const LoginPage = () => {
  const validateEmail = (email) => {
    if(!email) return 'Require'
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  };
  const validatePass = (pass) => {
    if (!pass) return "Require";
    if (pass.length < 8) return "A least 8 characters";
    return "";
  };

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const errors = {
    email: validateEmail(value.email),
    password: validatePass(value.password),
  };


  const [touched, setTouched] = useState ({
      email: false,
      password: false,
  })
  

  const handleInputChange = (evt) => {
    setValue({
      ...value,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <div>
      <form>
        <div>
          <input
            name="email"
            type="email"
            value={value.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <p>{errors.email}</p>
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={value.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <p>{errors.password}</p>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
