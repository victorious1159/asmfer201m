import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//

    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleLogin}>
                Submit
            </button>
        </form>
    );


export default LoginPage;
