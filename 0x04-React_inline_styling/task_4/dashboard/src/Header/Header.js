import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header(){
	return (
		<header className={css(styles.Header)}>
			<img src={logo} className={css(styles.HeaderLogo)} alt="logo" />
			<h1>School dashboard</h1>
		</header>
	);
}

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
	}
});

export default Header;
