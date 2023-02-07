import  React from 'react';
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.Login)}>
				<p>Login to access to the full dashboard</p>
				<div>
					<div className={css(styles.inputGroup)}> 
						<label htmlFor="email" >Email:</label>
						<input id="email" type="email" className={css(styles.LoginInput)} />
					</div>
					<div className={css(styles.inputGroup)}>
						<label htmlFor="password" >Password:</label>
						<input id="password" type="password" className={css(styles.LoginInput)} />
					</div>
					<button className={css(styles.loginButton)}>OK</button>
				</div>
      </div>
    </React.Fragment>
  );
}

const responsive = {
	small: '@media screen and (max-width: 900px)'
};

const styles = StyleSheet.create({
	Login: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		padding: '50px',
		[responsive.small]: {
			padding: 0
		}
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
		margin: '5px',
		[responsive.small]: {
			border: 'none'
		}
	},

	inputGroup: {
		display: 'inline',
		[responsive.small]: {
			display: 'flex'
		}
	},

	loginButton: {
		[responsive.small]: {
			border: '3px solid orange',
			borderRadius: '5px',
			
		}
	}
});

export default Login;
