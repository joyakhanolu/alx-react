import React, { Fragment }from 'react';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(newProps) {
		return (
			newProps.listNotifications.length > this.props.listNotifications.length
		);
	}

	markAsRead(id) { 
		console.log(`Notification ${id} has been marked as read`)
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;
		return (
			<React.Fragment>
				<div className="menuItem">
					Your notifications
				</div>
				{ displayDrawer &&
					<div className="Notifications">
						<button style={{background: 'transparent', float: 'right'}} aria-label='Close' onClick={() => console.log('Close button has been clicked')} >
							<img src={closeIcon} alt="close-icon" style={{width: '20px'}} />
						</button>
						<p>Here is the list of notifications</p>
						<ul>
							{
								listNotifications.length === 0 &&
									(<NotificationItem
										value="No new notification for now"
									/>)
							}
							{
								listNotifications && listNotifications.map((newNote) => (
									<NotificationItem
										key={newNote.id}
										html={newNote.html}
										type={newNote.type}
										value={newNote.value}
										markAsRead={this.markAsRead}
										id={newNote.id}
									/>
								))
							}
						</ul>
					</div>
				}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: []
};

export default Notifications;
