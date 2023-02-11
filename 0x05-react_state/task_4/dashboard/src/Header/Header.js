import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, logOut } = this.context;
		return (
			<header className={css(styles.Header)}>
				<img src={logo} className={css(styles.HeaderLogo)} alt="logo" />
				<h1>School dashboard</h1>
				{
					user.isLoggedIn && (
						<h2 id='logoutSection'>
							Welcome <b>{user.email}</b>
							<span onClick={logOut} className={css(styles.logOutSpanSection)}>
								(logout)
							</span>
						</h2>
					)
				}
			</header>
		);
	}
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
	Header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: '#e1354b',
		borderBottom: '4px solid #e1354b'
	},

	HeaderLogo: {
		width: '20%'
	},

	logOutSpanSection: {
		cursor: 'pointer',
		fontStyle: 'italic'
	},
});

export default Header;