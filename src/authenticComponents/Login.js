import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the username and password match your hard-coded credentials
    if (username === 'admin' && password === '123') {
      // You can perform any action you need on successful login, e.g., redirect
      alert('Nhap dung roi'); // Replace this with your desired action
      navigate("/read");
    } else {
      // Handle incorrect credentials here, e.g., show an error message
      alert('Sai roi, nhap lai di cha'); // Replace this with your desired error handling
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-success" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
