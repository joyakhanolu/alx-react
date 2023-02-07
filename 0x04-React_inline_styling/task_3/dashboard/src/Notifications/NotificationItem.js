import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type, html, value, markAsRead, id } = this.props;
		const styleDataType = type === 'default' ? styles.blue : styles.red;
		if (value) {
			return (<li data-notification-type={type} className={css(styleDataType, styles.itemList)} onClick={() => markAsRead(id)} >{value}</li>);
		} else {
			return (<li dangerouslySetInnerHTML={html} className={css(styleDataType, styles.itemList)}onClick={() => markAsRead(id)} data-notification-type={type}></li>)
		}
	}
}

const responsive = {
	small: '@media screen and (max-width: 900px)'
};

const styles = StyleSheet.create({
	red: {
		color: 'red'
	},

	blue: {
		color: 'blue'
	},

	itemList: {
		[responsive.small]: {
			display: 'block',
			fontSize: '20px',
			padding: '10px 8px',
			listStyle: 'none',
			borderBottom: '1px solid black'
		}
	}
});

NotificationItem.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string,
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	markAsRead: PropTypes.func,
	id: PropTypes.number
};

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {},
	markAsRead: () => {},
	id: 0
};

export default NotificationItem;
