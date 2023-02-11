import  React from 'react';
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			enableSumit: false
		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);

	}

	handleLoginSubmit(event) {
		event.preventDefault();
		this.props.logIn(this.state.email, this.state.password);
	}

	handleChangeEmail(event) {
		this.setState({ email: event.target.value });
		if (event.target.value.length > 0 && this.state.password.length > 0) {
			this.setState({ enableSumit: true })
		} else {
			this.setState({ enableSumit: false })
		}
	}

	handleChangePassword(event) {
		this.setState({ password: event.target.value });
		if (event.target.value.length > 0 && this.state.email.length > 0) {
			this.setState({ enableSumit: true })
		} else {
			this.setState({ enableSumit: false })
		}
	}

	render () {
		return (
			<React.Fragment>
				<div className={css(styles.Login)}>
					<p>Login to access to the full dashboard</p>
					<form action='' onSubmit={this.handleLoginSubmit}>
						<div className={css(styles.inputGroup)}> 
							<label htmlFor="email" >Email:</label>
							<input
								id="email"
								type="email"
								className={css(styles.LoginInput)}
								value={this.state.email}
								onChange={this.handleChangeEmail}
							/>
						</div>
						<div className={css(styles.inputGroup)}>
							<label htmlFor="password" >Password:</label>
							<input
								id="password"
								type="password"
								className={css(styles.LoginInput)}
								value={this.state.password}
								onChange={this.handleChangePassword}
							/>
						</div>
						<input type='submit' value='Ok' disabled={!this.state.enableSumit} className={css(styles.loginButton)} />
					</form>
				</div>
			</React.Fragment>
		);
	}
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
