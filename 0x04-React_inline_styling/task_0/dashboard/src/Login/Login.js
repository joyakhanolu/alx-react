import  React from 'react';
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <div className="Login">
				<p>Login to access to the full dashboard</p>
				<div>
					<label htmlFor="email" >Email:</label>
					<input id="email" type="email" name="email" />
					<label htmlFor="password" >Password:</label>
					<input id="password" type="password" name="password" />
					<button>OK</button>
				</div>
      </div>
    </React.Fragment>
  );
}

export default Login;
