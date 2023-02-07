import React from "react";
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type, html, value, markAsRead, id } = this.props;
		if (value) {
			return (<li data-notification-type={type} onClick={() => markAsRead(id)} >{value}</li>)
		} else {
			return (<li dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)} data-notification-type={type}></li>)
		}
	}
}

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
