// Login.js
import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [apiData, setApiData] = useState(null);
  const [access_token, setAccessToken] = useState(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // setIsLoad

    try {
      const response = await fetch(
        "http://localhost:8080/v1/springlearning/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Login successful!");
        // You can perform additional actions after successful login, such as redirecting to another page.
        const dataApi = await response.json();
        setApiData(dataApi);
        setAccessToken(dataApi.access_token);
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="login-card border p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputEmail">Email address</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="Enter email"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      {apiData && <p>Access Token : {access_token}</p>}
    </>
  );
}

export default Login;
