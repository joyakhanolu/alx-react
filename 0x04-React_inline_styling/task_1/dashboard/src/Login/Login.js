import  React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.Login)}>
				<p>Login to access to the full dashboard</p>
				<div>
					<label htmlFor="email" >Email:</label>
					<input id="email" type="email" className={css(styles.LoginInput)} />
					<label htmlFor="password" >Password:</label>
					<input id="password" type="password" className={css(styles.LoginInput)} />
					<button>OK</button>
				</div>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
	Login: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		padding: '50px',
		marginLeft: '-15px'
	},

	Loginp: {
		top: '3rem',
		left: '2.5rem'
	},

	Logindiv: {
		marginLeft: '-5px',
		marginTop: '15px'
	},

	LoginInput: {
		margin: '5px'
	},
});

export default Login;
